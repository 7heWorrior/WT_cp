//console.log('this is starting of Course Project')
const path = require('path')
const express = require('express')
require('../src/db/database')
const userRouter = require('../src/routers/users')
const recipeRouter = require('../src/routers/recipes')
const forumRouter = require('../src/routers/forums')

const publicPath = path.join(__dirname, '../public')
const app = express()
app.use(express.static(publicPath))
app.use(express.json())
app.use(userRouter)
app.use(recipeRouter)
app.use(forumRouter)



app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/frontpage',(req,res)=>{
    res.render('frontpage')
})
app.get('/discussion',(req,res)=>{
    res.render('discussion')
})
app.get('replies',(req,res)=>{
    res.render('layoutpage')
})
// app.get('/about',(req,res)=>{
//     res.render('about')
// })
// app.get('/video', (req,res)=>{
//     res.render('video')
// })


app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})