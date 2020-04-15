//console.log('this is starting of Course Project')
const path = require('path')
const express = require('express')
const hbs = require('hbs')


// console.log(__dirname)
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))



app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/video', (req,res)=>{
    res.render('video')
})


app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})