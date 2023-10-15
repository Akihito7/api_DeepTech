const { Router } = require("express");

const routes = Router();

routes.get("/products", (req, res) => {
    res.status(200).json("Bem vindo a deep tech")
});

module.exports = routes;