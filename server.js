const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const allRoutes = require("./src/routes/");
app.use(allRoutes)

const PORT = 7777;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));