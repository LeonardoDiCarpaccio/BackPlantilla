import { getManager, Like } from "typeorm";
import { Request, Response } from "express";
import { clientMethods } from "../client/clientController";
import { client } from "../../entities/client";
import { config } from "../../../config/config";
import { crudMethods } from "../../helpers/crudMethods";
import { error } from "console";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var dotenv = require("dotenv");
dotenv.config();

// import { verifyToken } from "./verifyToken";

export class authController {
  // insert with no id, update with id
  public async login(request: Request, response: Response) {
    const clientRepository = getManager().getRepository(client);

    const where = crudMethods.buildWhereClause({
      where: { mail: request.body.mail },
      relations: ["role"],
    });

    const result = await clientRepository.find(where);

    if (
      !result ||
      result.length !== 1 ||
      !bcrypt.compareSync(request.body.password, result[0].password)
    ) {
      return response.status(400).send("Invalid email or password.");
    }

    // Create and sign the JWT
    const token = jwt.sign(
      { id: result[0].id, role: result[0].role.name },
      process.env.JWT_SECRET,
      {
        expiresIn: parseInt(process.env.JWT_EXPIRATION),
      }
    );

    const userToSend = {
      ...result[0],
      password: undefined,
    };
    console.log(userToSend, "userToSend");
    response.status(200).send({
      message: "Logged in successfully.",
      user: userToSend,
      token: token,
    });
  }

  //   router.post("/check", VerifyToken, function (req, res) {
  //     user.get({ id: req.userId }, function (err, user) {
  //       if (err)
  //         return res.status(500).send("There was a problem finding the user.");
  //       if (!user) return res.status(401).send("No user found.");

  //       res.status(200).send(user);
  //     });
  //   });

  public async check(request: Request, response: Response) {
    console.log(request.body, "request.body de auth check ");
    const clientRepository = getManager().getRepository(client);
    const where = crudMethods.buildWhereClause({
      where: { id: request.body.id },
      relations: ["role"],
    });
    const result = await clientRepository.find(where);
    console.log(result, "result check");

    if (result.length == 0) {
      response.send("No user found.");
    } else if (result.length == 1) {
      response.send(result);
    } else {
      response.send("There was a problem finding the user.");
    }
  }
  public async save(request: Request, response: Response) {
    if (request.body.id === undefined) {
      const clientRepository = getManager().getRepository(client);
      const where = { where: { mail: request.body.mail } };
      const resultFind = await clientRepository.find(where);
      console.log(resultFind, " resultFind: ");
      console.log(resultFind !== undefined, " resultFind!== undefined ");
      console.log(resultFind.length != 0, " resultFind.length !=0");

      if (resultFind !== undefined && resultFind.length != 0) {
        response.status(402);
      } else {
        let password = (Math.random() + 1).toString(36).substring(7);
        request.body.password = bcrypt.hashSync(password, 8);
        const clientRepository = getManager().getRepository(client);
        const result = await clientRepository.save(request.body);
        console.log(result, "result");
        response.send({ password: password });
      }
    }
  }
}

export const authMethods = new authController();
