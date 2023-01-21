const Express = require("express");
const routes = Express.Router();
const db = require("./db_server");
const table = require("./models").Users;
const body_parser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

routes.use(body_parser.json());
const whitelist = ["127.0.0.1", "::1"];

function addToWhitelist(ip) {
  whitelist.push(ip);
}

function checkWhitelist(req, res, next) {
  const clientIp = req.ip;
  if (whitelist.includes(clientIp)) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

function generateJWT(userId) {
  const secret = process.env.JWT_SECRET;
  const expiresIn = "1h";
  const token = jwt.sign({ userId }, secret, { expiresIn });
  return token;
}

function convertBlobToPlaintext(blob) {
  const decodedBlob = Buffer.alloc(blob.length, blob, "base64").toString();
  return decodedBlob;
}

function authenticateUser(email, password) {
  return table
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        const decode_pass = convertBlobToPlaintext(user.password);
        return bcrypt.compare(password, decode_pass).then((result) => {
          if (result) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        });
      } else {
        return Promise.resolve(null);
      }
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}

routes.post("/login", (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password)
    .then((user) => {
      if (user) {
        addToWhitelist(req.ip);
        const token = generateJWT(user.id);
        res.json({ id: user.id, authorisation: true, token });
      } else {
        res.status(401).send("NOT Unauthorized");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//   if (req.url == "/insert" && req.method == "POST") {
//     bcrypt.hash(req.query.password, 10, function (err, result) {
//       table
//         .create({
//           first_name: req.query.f_name,
//           last_name: req.query.l_name,
//           email: req.query.email,
//           password: result,
//         })
//         .then((user) => {
//           bcrypt.compare(req.query.password, user.password, function (err, result) {
//             if (result == true) console.log("USER FOUUND IN DB");
//             else console.log("NOT USER FOUUND IN DB");
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
//   }
// });
module.exports = routes;
