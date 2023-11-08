const express = require('express');
const route = express();
const knex = require('../connection/connection');
route.use(express.json());

route.get('/', async (req,res) => {
    return res.status(200).json(`Deploy ok!`)
});
route.get('/carros', async (req,res) => {
    try {
        const listarCarros = await knex(`carros`);
    return res.status(200).json(listarCarros);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: `Erro interno do servidor`})
    }
    
});
module.exports = route;