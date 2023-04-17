const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
import * as fs from "fs";
import * as path from "path";

dotenv.config();

export default (allowedRoles) => (req, res, next) => {
  const apiKey = req.header("X-Api-Key");
  console.log(req.header, res.body, next, "everythign ");
  if (apiKey) {
    const apiKeystorePath = path.join(__dirname, "../../../apiKeystore.json");
    const apiKeystoreData = JSON.parse(
      fs.readFileSync(apiKeystorePath, "utf8")
    );
    const apiKeyIsValid = Object.values(apiKeystoreData).includes(apiKey);

    if (apiKeyIsValid) {
      return next();
    } else {
      return res.status(401).send("Invalid API key.");
    }
  }

  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token, "tokentokentokentoken");

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(decoded, "decoded");
    // console.log(req.user, " req.user");
  } catch (error) {
    return res.status(400).send("Invalid token.");
  }
  console.log(allowedRoles, req.user.role, "test auth");
  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(req.user.role)
  ) {
    return res.status(403).send("Access denied. Insufficient privileges.");
  }

  next();
};
