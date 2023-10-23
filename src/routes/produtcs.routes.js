const { Router } = require("express"); 
const ProductsController = require("../controllers/ProductsController");

const controller = new ProductsController();

const routes = Router();

routes.get("/", controller.getProducts);
routes.get("/category", controller.getCategories);
routes.get("/category/:category", controller.getProductsByCategory);
routes.get("/:id", controller.getUniqueProduct);

module.exports = routes;