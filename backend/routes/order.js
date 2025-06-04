const router = require('express').Router();
const { create,remove,cancel,orderList} = require('../controllers/order'); 
const {authenticate,request} = require('../middleware/middleware');

router.get('/:id',request,orderList);
router.post('/',request,create);
router.delete('/:id',request,remove);
router.patch('/:id',request,cancel); 

module.exports = router;