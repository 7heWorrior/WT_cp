const express = require('express')
const Recipe = require('../models/recipes')
const router = new express.Router()


// router.get('/recipes', async (req,res)=>{
//     try{
//         const recipe = await Recipe.find({})
//         res.send(recipe)
//     } catch(e){
//         res.status(500).send()
//     }
// })

router.get('/recipes*', async (req, res)=>{
    try{
        
        var recipe = await Recipe.findOne({name: req.query.name})
        if(!recipe){
            recipe = await Recipe.find({})
        }

        res.send(recipe)
    } catch(e){
        res.status(500).send(e)
    }
})
router.post('/recipes', async(req,res)=>{
    const recipe = new Recipe(req.body)
    try{
        await recipe.save()
        res.status(200).send('Your recipe has been posted')
    }catch(e){
        res.status(500).send()
    }
})
module.exports = router