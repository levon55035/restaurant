const route = require('express').Router()
const connection = require("../connection").db;


route.get('/', async (req,res)=>{
    
    const menu = []
    connection.query(`SELECT * FROM menu;`,(error,result,fields)=>{
        res.json(result)
      
    })
   // connection.end()
    
})
module.exports = { route };