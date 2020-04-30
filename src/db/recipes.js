// const mongoose = require('mongoose')
require('./database.js')
const recipe = require('../models/recipes')
const fs = require('fs')

const databuffer = fs.readFileSync('./coffee_info.json').toString()

const data = JSON.parse(databuffer)
// console.log(data.coffees[0])
const recipes = data.coffees

recipes.forEach(function(item){
    const r = new recipe(item)
    r.save()

})
