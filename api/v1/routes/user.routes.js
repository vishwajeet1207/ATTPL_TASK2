const express=require('express')
const router=express.Router();
const usercontroller=require("../controller/user.controller")
const authmddleware=require("../../middlewares/authmiddleware")

router.post("/",usercontroller.createuserr);
router.post("/signup",usercontroller.signupp)
router.post("/addrole",usercontroller.addrolee);
router.post("/updateuser",usercontroller.updateuserr)
router.post("/getuser/:user_id",usercontroller.getuserr)
router.post("/deleteuser/:user_id",usercontroller.deleteuserr)
router.post("/listuser",authmddleware.authmiddle,usercontroller.listuserr)
router.post("/assignrole",usercontroller.assignrolee)
router.post("/removerole",usercontroller.removerolee)

module.exports=router;