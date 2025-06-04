const router = require('express').Router();
const multer = require('multer');
const { create,remove,update,menuList,menuCategoryList,menuItem} = require('../controllers/menu'); 
const {authenticate,request} = require('../middleware/middleware');
const path = require('path');

const storage = multer.diskStorage({
    destination : './images',
    filename : function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage : storage
}).single('image')


router.get('/',request,menuList);
router.get('/single/:id',request,menuItem);
router.get('/category',request,menuCategoryList);
router.post('/',request,create);
router.delete('/:id',request,remove);
router.patch('/:id',request,upload,update);

module.exports = router;