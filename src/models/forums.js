const mongoose = require('mongoose')

const forumSchema = mongoose.Schema({
    topic:{
        type: String,
        required: true,
        // Unique: true
    },
    body:{
        type: String,
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},{
    timestamps: true
})

const Forums = mongoose.model('Forums', forumSchema)


module.exports = Forums