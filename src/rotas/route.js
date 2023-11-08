const express = require('express');
const route = express();
const knex = require('../connection/connection');
route.use(express.json());

route.get('/', async (req,res) => {
    return res.status(200).json(`Deploy ok!`)
});
route.get('/carros', async (req,res) => {
    const listarCarros = await knex(`carros`);
    return res.status(200).json(listarCarros.rows);
});
module.exports = route;