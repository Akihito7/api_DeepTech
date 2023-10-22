const { Router } = require("express");
const productsRoutes = require("./produtcs.routes");

const routes = Router();

routes.use("/products", productsRoutes);

module.exports = routes;