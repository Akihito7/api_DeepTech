class ProductsController {

    async getProducts(request, response){
        response.status(200).json({
            message: "Controller Products"
        })
    }
}

module.exports = ProductsController;