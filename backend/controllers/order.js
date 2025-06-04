const Order = require('../models/orders');

const orderList = async(req,res) => {
    const {id} = req.params;
    try{
        const orders = await Order.find({email : id}).sort({createdAt : -1});
        res.status(200).json(orders);
    }catch(error){
        res.json({error:error.message})
    }
}

const create = async(req,res) => {
    const {menuID,menus,fullName,email,streetName,apartmentNumber,buildingNumber} = req.body
    try{
        if(req.body.userID){
            const order = await Order.create({menuID,menus,fullName,email,streetName,apartmentNumber,buildingNumber,userID:req.body.userID});
            if(!order){
                return res.status(404).json({error:'Failed to place order'})
            }
            return res.status(200).json(order)
        }
        const order = await Order.create({menuID,menus,fullName,email,streetName,apartmentNumber,buildingNumber});
        if(!order){
            return res.status(404).json({error:'Failed to place order'})
        }
        res.status(200).json(order);
    }catch(error){
        res.json({error:error.message})
    }
}

const remove = async(req,res) => {
    const {id} = req.params;
    try{
        const order = await Order.findByIdAndDelete(id)
        if(!order){
            return res.status(404).json({error:'Failed to delete order'})
        }
        res.status(200).json(order);
    }catch(error){
        res.json({error:error.message})
    }
}

const cancel = async(req,res) => {
    const {id} = req.params;
    try{
        const order = await Order.findByIdAndUpdate(id,{cancelled : true},{returnOriginal:false}); 
        if(!order){
            return res.status(404).json({error:'Failed to cancel order'})
        };
        res.status(200).json(order);
    }catch(error){
        res.json({error:error.message})
    }
}

module.exports = {orderList,create,remove,cancel};