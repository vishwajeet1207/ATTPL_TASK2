const { UPDATEUSERSUCESSMSG, USERENTER, USERSHOW, USERDELETE, ASSIGNROLE, ROLEADD, REMOVEROLE } = require("../../config/constants");
const { generateToken } = require("../service/auth.service");
const userservice=require("../service/user.service")
const bcrypt =require("bcrypt")

// async function createuserr(req,resp){
//     const {user_id,username,password}=req.body;
//     try{
//         const user=await userservice.createuser(user_id,username,password);
//             resp.status(201).json({
//             status_code:201,
//             data:user,
//             message:{SucessMessage:USERENTER}
//         });
        
//     }catch(error)
//         {
//         resp.status(500).json({
//             status_code:500,
//             data:{},
//             message:{erroeMessage:error.message}
//         })
//     }
// }
exports.signupp=async(req,resp)=>{
    try{
        const saltrounds =10;
        const username=req.body.username
        const password=req.body.password;
        const encry=await bcrypt.hash(password,saltrounds)
        const user=await userservice.signup(username,encry);
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:"signup c"}
        });
    }

    catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
    
}

exports.createuserr=async(req,resp)=>{
    try{
        // const{user_id,username,password}=req.body;
        const saltrounds=10
        const user_id=req.body.user_id;
        const username=req.body.username
        const password=req.body.password;
        const email=req.body.email;
        const role_id=req.body.role_id
       
        const encry= await bcrypt.hash(password,saltrounds)
        console.log(user_id,username,encry,email,role_id);

        const user=await userservice.createuser(user_id,username,encry,email,role_id);
        const token=generateToken(user)
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:token,
            message:{SucessMessage:USERENTER}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.updateuserr=async(req,resp)=>{
    try{
        const saltrounds=10;
        const user_id=req.body.user_id;
        const username=req.body.username
        const password=req.body.password;
        const email=req.body.email
        const role_id=req.body.role_id
        const encry= await bcrypt.hash(password,saltrounds)
        // console.log(password);
        const user=await userservice.updateuser(user_id,username,encry,email,role_id);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:UPDATEUSERSUCESSMSG}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.getuserr=async(req,resp)=>{
    try{
      
        const user_id=req.params.user_id;
       
        const user=await userservice.getuser(user_id);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:USERSHOW}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.deleteuserr=async(req,resp)=>{
    try{
       
        const user_id=req.params.user_id;
   
        const user=await userservice.deleteuser(user_id);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:USERDELETE}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.listuserr=async(req,res)=>{
    try{
        const users =await userservice.listuser();
        res.json(users)
    }
    catch{
        console.log("no list");
    }
}


exports.addrolee=async(req,resp)=>{
    try{
    
        
        const role_id=req.body.role_id;
        const role_name=req.body.role_name
        console.log(role_id,role_name);
        const user=await userservice.addrole(role_id,role_name);
        console.log(user);
        // resp.send(user)
        resp.status(201).json({
            status_code:201,
            data:user,
            message:{SucessMessage:ROLEADD}
        });
    }catch (error)
    {
        resp.status(500).json({
            status_code:500,
            data:{},
            message:{erroeMessage:error.message}
        })
    }
}

exports.assignrolee=async(req,resp)=>{
    try{

    const user_id=req.body.user_id
    const role_id=req.body.role_id
    const user=await userservice.assignrole(user_id,role_id)
    resp.status(201).json({
        status_code:201,
        data:user,
        message:{SucessMessage:ASSIGNROLE}
    });

}
catch{
    resp.status(500).json({
        status_code:500,
        data:{},
        message:{erroeMessage:error.message}
    })
}
}

exports.removerolee=async(req,resp)=>{
    try{

    const user_id=req.body.user_id
    const user=await userservice.removerole(user_id)
    resp.status(201).json({
        status_code:201,
        data:user,
        message:{SucessMessage:REMOVEROLE}
    });

}
catch{
    resp.status(500).json({
        status_code:500,
        data:{},
        message:{erroeMessage:error.message}
    })
}
}
// module.exports={listuserr}
// module.exports={createuserr}