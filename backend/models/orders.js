const mongoose = require('mongoose');

const schema = mongoose.Schema;

const orderSchema = new schema({
    userID : {
        type : String, 
        default : ''        
    },
    menus : {
        type : Array,
        required : true        
    },
    fullName : {
        type : String,
        required: true
    },    
    email : {
        type : String,
        required: true
    }, 
    streetName : {
        type : String,
        required: true
    }, 
    apartmentNumber : {
        type : String,
        required: true
    }, 
    buildingNumber : {
        type : String,
        required: true
    }, 
    // phoneNumber : {
    //     type : Number,
    //     required : true
    // }, 
    cancelled : {
        type : Boolean,
        default : false
    }
}); 

module.exports = mongoose.model('Orders',orderSchema);