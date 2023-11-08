require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const route = require("./rotas/route");

app.use(route);
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Rodando na porta: ${port}`));
