const router = require('express').Router();
const {register,remove,login,update,favorites} = require('../controllers/users');
const {authenticate,request} = require('../middleware/middleware');

router.post('/register',request,register);
router.post('/login',request,login);
router.delete('/:id',request,remove);
router.patch('/profile/:id',request,update);
router.patch('/favorites/:id',request,favorites);

module.exports = router;