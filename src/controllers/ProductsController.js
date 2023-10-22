const knex = require("../database");
class ProductsController {

    async getProducts(request, response) {
        console.log("request recebido")

        const products = await knex("products");
        response.status(200).json(products)
    }


    async getUniqueProduct(request, response) {

        const { id } = request.params;
        const product = await knex("products").where({ id }).first();

        response.status(200).json(product)
    }
}

module.exports = ProductsController;