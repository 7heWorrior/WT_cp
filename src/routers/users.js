const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')
const router  = new express.Router()



router.post('/users',async (req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({user,token })
    } catch{
        res.status(500).send()
    }
})
// router.get('/users/:id', async (req,res)=>{
//     try{
//         const user = await User.findById(req.params.id)
//         res.send(user)
//     }catch(e){
//         res.status(500).send()
//     }
// })

router.get('/users', async (req,res)=>{

    try{
        const user = await User.find({})
        res.send(user)
    } catch{
        res.status(500).send()
    }

    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})
router.get('/users/me',auth,(req,res)=>{
    res.send(req.user)
})
router.post('/users/login', async(req,res)=>{
    try{
        const user = await User.findbyCred(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (e){
        res.status(400).send()
    }
})
router.post('/users/logout',auth,async (req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        }) 
        await req.user.save()
        res.send()

    }catch(e){
        res.status(500).send()
    }
})
router.post('/users/logoutall',auth, async (req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

router.patch('/users/me',auth, async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','age','email','password']

    const isValidOp = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOp){
        return res.status(400).send({ error: 'Invalid Update'
        })
    }

    try{
        // const user = await User.findById(req.user._id)
        updates.forEach((update)=> req.user[update] = req.body[update] )
        await req.user.save()
        // const user = await User.findByIdAndUpdate(req.params.id, req.body ,{new: true, runValidators: true})
        // if(!user){
        //     return res.status(404).send()
        // }
        res.send(req.user)
    } catch(e){
        res.status(400).send(e)
    }
})
router.delete('/users/me',auth, async (req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id)
        await req.user.remove()
        res.send(req.user)
    } catch (e){
        res.status(500).send(e)
    }
})



module.exports = router