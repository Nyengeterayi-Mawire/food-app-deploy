const Menu = require('../models/menu');

const menuList = async(req,res) => {
    try{
        const menus = await Menu.find({});
        res.status(200).json(menus)
    }catch(error){
        res.json({error:error.message})
    }
}


const menuCategoryList = async(req,res) => {
    try{
        const menus = await Menu.aggregate([
            {$group : {_id : '$category',items: { $push: "$$ROOT" }}},
            // {$project: { _id: 0,category: "$_id",items: 1}}
        ]);
        console.log(menus);
        res.status(200).json(menus);
    }catch(error){
        res.json({error:error.message});
    }
}

const menuItem = async(req,res) => {
    const {id} = req.params;
    try{
        const menu = await Menu.findById(id);
        if(!menu){
            return res.status(404).json({error:'Menu item does not exist'})
        };
        console.log(menu);
        res.status(200).json(menu);
    }catch(error){
        res.json({error:error.message})
    }
}

const create = async(req,res) => {
    const {name,description,price,category} = req.body;
    try{
        if(req.file){
            const menu = await Menu.create({name,description,price,category,image:req.files.filename});
            if(!menu){
                return res.status(404).json({error:'Failed to create menu item'})
            }
            return res.status(200).json(menu)
        }
        const menu = await Menu.create({name,description,price,category});
        if(!menu){
            return res.status(404).json({error:'Failed to create menu item'})
        }
        res.status(200).json(menu)
    }catch(error){
        res.json({error:error.message})
    }
}
const remove = async(req,res) => {
    const {id} = req.params;
    try{
        const menu = await Menu.findByIdAndDelete(id);
        if(!menu){
            return res.status(404).json({error:'Failed to delete menu item'})
        }
        res.status(200).json(menu)
    }catch(error){
        res.json({error:error.message})
    }
}
const update = async(req,res) => {
    const {id} = req.params;
    const data = req.body;
    try{
        if(req.file){
            const menu = await Menu.findByIdAndUpdate(id,{...data,image:req.file.filename},{returnOriginal:false})
            if(!menu){
                return res.status(404).json({error:'Failed to update menu item'})
            }
            return res.status(200).json(menu)
        }
        const menu = await Menu.findByIdAndUpdate(id,{...data},{returnOriginal:false});
        if(!menu){
            return res.status(404).json({error:'Failed to update menu item'})
        }        
        res.status(200).json(menu)
    }catch(error){
        res.json({error:error.message})
    }
} 

module.exports = {create,remove,update,menuList,menuCategoryList,menuItem};