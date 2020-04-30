const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const Forums = require('../models/forums')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(input){
            if(!validator.isEmail(input)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7

    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]

})
userSchema.virtual('forums',{
    ref: 'Forums',
    localField: '_id',
    foreignField: 'owner'
})
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id},"thisissparta")
    user.tokens = user.tokens.concat({ token })

    await user.save() 
    return token
} 
userSchema.statics.findbyCred = async (email,password) =>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Invalid Email or Password')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Invalid Email or Password')
    }
    return user
}

userSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User =  mongoose.model('User', userSchema)

module.exports = User