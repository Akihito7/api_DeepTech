const { Router } = require("express"); 

const routes = Router();

routes.get("/", (request, response ) => {
    response.status(200).json("Bem vindo aos produtos")
});

module.exports = routes;

