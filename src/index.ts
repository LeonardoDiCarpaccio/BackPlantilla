import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
import auth from "./helpers/auth";
const cors = require("cors");
const path = require("path");
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    const winston = require("winston");

    const logger = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      defaultMeta: { service: "user-service" },
      transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });
    process.on("uncaughtException", function (error) {
      logger.log("error :", error);
    });

    if (process.env.NODE_ENV !== "production") {
      logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        })
      );
    }
    // create express app
    const app = express();
    app.use(cors());

    app.use(bodyParser.json());
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      req.header("Content-Type");
      req.header("Accept");
      next();
    });

    // register all application routes
    AppRoutes.forEach((route) => {
      if (route.allowedRoles || route.apiKeyRequired) {
        app[route.method](
          route.path,
          auth(route.allowedRoles),
          (request: Request, response: Response, next: Function) => {
            route
              .action(request, response)
              .then(() => next)
              .catch((err) => next(err));
          }
        );
      } else {
        app[route.method](
          route.path,
          (request: Request, response: Response, next: Function) => {
            route
              .action(request, response)
              .then(() => next)
              .catch((err) => next(err));
          }
        );
      }
    });

    // ... (other app setup code)
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "../../dist/syneview.app")));

    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../../dist/syneview.app/index.html"));
    });
    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
