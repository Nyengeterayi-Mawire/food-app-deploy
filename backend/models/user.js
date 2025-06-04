const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    phoneNumber : {
        type : Number,
        default : 0
    }, 
    favorites : {
        type : Array,
        default : []
    }
}); 

module.exports = mongoose.model('Users',userSchema);