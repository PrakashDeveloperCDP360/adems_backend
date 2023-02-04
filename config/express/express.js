const express = require("express");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");
// const auth = require('../middlewares/auth');
const cors = require("cors");
module.exports = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://student.cdp360.in"],
      credentials: true,
    })
  );
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(cookieParser());
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // app.use(auth);
};
