const mysql=require("mysql")
const dbconfig=require("../../config/database")
const User =require("../models/user.model")
const hashsaltrounds=10
const bcrypt = require('bcrypt');
const pool=mysql.createPool(dbconfig);

// async function createuser(user_id,username,password)
// {
//     const encry=await bcrypt.hash(password,hashsaltrounds);
//     return User.create({user_id,username, password:encry})
// }

async function createuser(user_id,username,password,email,role_id){
    return new Promise((resolve,reject)=>{
        pool.query("INSERT INTO users (user_id,username, password,email,role_id) VALUES (?,?,?,?,?)",[user_id,username,password,email,role_id],
        (err,result)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            else{
                console.log(result);
                resolve(result)
            }
        })
    })
}

async function updateuser(user_id,username,password,email,role_id){
    return new Promise((resolve,reject)=>{
        pool.query("UPDATE users SET username=?,password=?,email=?,role_id=? WHERE user_id=?",[username,password,email,role_id,user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}

async function getuser(user_id){
    return new Promise((resolve,reject)=>{
        pool.query("SELECT *FROM users WHERE user_id=?",[user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}

async function deleteuser(user_id){
    return new Promise((resolve,reject)=>{
        pool.query("DELETE FROM users WHERE user_id=?",[user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
}
async function listuser() {
    return new Promise((resolve,reject)=>{
        pool.query("SELECT * FROM users",
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 
  }

  async function addrole(role_id,role_name){
    return new Promise((resolve,reject)=>{
        pool.query("INSERT INTO roles (role_id,role_name) VALUES (?,?)",[role_id,role_name],
        (err,result)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            else{
                console.log(result);
                resolve(result)
            }
        })
    })
}

async function assignrole (user_id,role_id){
    return new Promise((resolve,reject)=>{
        pool.query("UPDATE users SET role_id=? WHERE user_id=?",[role_id,user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 

}

async function removerole (user_id){
    return new Promise((resolve,reject)=>{
        pool.query("UPDATE users SET role_id=NUll WHERE user_id=?",[user_id],
        (err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        }
        )
    }) 

}

async function signup (username,password){
    return new Promise((resolve,reject)=>{
        pool.query("INSERT INTO time (username, password) VALUES (?,?)",[username,password],
        (err,result)=>{
            if(err){
                console.log(err);
                reject(err)
            }
            else{
                console.log(result);
                resolve(result)
            }
        })
    })

}


module.exports={ listuser,deleteuser,getuser,updateuser,createuser,addrole,assignrole,removerole,signup}