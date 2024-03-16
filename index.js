const express=require("express")
const bodyparser=require("body-parser")
const userroutes= require("./api/v1/routes/user.routes")
const errorhandler=require("./api/middlewares/errorhnadler")
const logermid=require("./api/middlewares/logger.middleware")
const app=express();
const port =process.env.port || 5000
app.use(bodyparser.json());

app.use(logermid)
app.use(userroutes)
app.use(errorhandler)

app.listen(port,()=>{console.log("Server is runing");})