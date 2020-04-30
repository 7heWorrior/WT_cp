// TODO:
// Enlist all post 
// can reply to specific post
// like a post 
// delete a post if you are owner
// edit post if you are owner

const express = require('express')
const Forums = require('../models/forums')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/forums',async(req,res)=>{
    try{
        const forum = await Forums.find({})
        // console.log(forum)
        res.send(forum)
    }catch(e){
        res.status(500).send()
    }
})


router.post('/forums',auth,async(req,res)=>{
    console.log(req.user._id)
    const forum = new Forums({
        ...req.body,
        owner: req.user._id

    })
    // console.log(forum)
    try{
        await forum.save()
        console.log('done')
        res.status(200).send(forum)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/forums/:id',auth, async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['topic','body']

    const isValidOp = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOp){
        return res.status(400).send({error: 'Invaild Update'})
    }
    try{
        const forum = Forums.findOne({_id:req.params.id,owner:req.user._id})
        // console.log(forum)
        if(!forum){
            res.status(404).send()
        }
        updates.forEach((update)=> forum[update] = req.body[update])
        
        await forum.save()
        res.send(forum)

    }catch(e){
        res.status(500).send()
    }
})



module.exports = router