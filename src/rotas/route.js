const express = require('express');
const route = express();
const pool = require('../connection/connection');
route.use(express.json());

route.get('/home', async (req,res) => {
    return res.status(200).json(`Deploy ok!`)
});
route.get('/carros', async (req,res) => {
    const listarCarros = await pool.query(`select * from carros`);
    return res.status(200).json(listarCarros.rows);
});
module.exports = route;