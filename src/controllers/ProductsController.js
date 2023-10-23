const knex = require("../database");
class ProductsController {

    async getProducts(request, response) {

        const products = await knex("products");
        response.status(200).json(products)
    };

    async getProductsByCategory(request, response) {
        try {
            const { category } = request.params;
            const products = await knex("products").where({ category });

            response.status(200).json(products);
        } catch (error) {
            response.status(400).json(
                { "message": "não foi possivel pegar os produtos" })
        }
    };


    async getUniqueProduct(request, response) {

        const { id } = request.params;
        const product = await knex("products").where({ id }).first();

        response.status(200).json(product)
    };

    async getCategories(request, response) {
        const uniqueCategories = await knex("products").distinct("category");
        console.log(uniqueCategories)

        response.status(200).json(uniqueCategories);
    };
}

module.exports = ProductsController;