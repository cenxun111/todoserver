const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    genre:{ 
        type:String,
    },
    year:{
        type:String
    }
});

const Card = new mongoose.model('card', CardSchema);
module.exports = Card;