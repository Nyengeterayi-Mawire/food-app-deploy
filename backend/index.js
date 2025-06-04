const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

const app = express() 
app.use(express.json());
app.use(cors());
app.use(express.static('images'))

app.use('/users',userRoutes);
app.use('/menus',menuRoutes);
app.use('/orders',orderRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`)
    })
}).catch(error=>{
    console.error(error)
})
; 
