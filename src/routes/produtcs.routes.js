const { Router } = require("express"); 
const ProductsController = require("../controllers/ProductsController");

const controller = new ProductsController();

const routes = Router();

routes.get("/", controller.getProducts);

module.exports = routes;

