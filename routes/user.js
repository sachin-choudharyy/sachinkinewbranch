const express=require('express')
const router =express.Router()
 const usercontroles=require('../controllers/usercontroles')


 router.post('/user',usercontroles.userpostdata)
 router.get('/getdatauser',usercontroles.getdatauser)
router.post('/loginuser',usercontroles.loginuser)

 module.exports=router;