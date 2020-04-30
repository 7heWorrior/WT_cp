const mongoose = require('mongoose')

const coffeeSchema  = new mongoose.Schema({
    name:{
        type: String
    },
    recipe:{
        type: String
    },
    description:{
        type: String
    },
    shop:{

    },
    ingredients:{
        
    }

})

const Recipes = mongoose.model('Recipes', coffeeSchema)

module.exports = Recipes