const mongoose = require('mongoose');

const schema = mongoose.Schema;

const menuSchema = new schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    availability : {
        type : Boolean, 
        default : true        
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        default : ''
    }
}); 

module.exports = mongoose.model('Menus',menuSchema);