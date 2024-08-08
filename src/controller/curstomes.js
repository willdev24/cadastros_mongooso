
const { criptor } = require("../ultils/password.js")
const { Model } = require("../module/curstomes")
const curstomesModel = require("../module/curstomes")
const { model } = require("mongoose")
const e = require("express")


async function cad(req, res){
const {name, password, email} = req.body

    const senha = await criptor(password)//
    const registro = new Model({
        name,
        email,
        password:senha
    })

registro.save()
res.redirect("/")
}

const lista = async (req, res)=>{
    
const users = await curstomesModel.Model.find()  

    res.render("lista.ejs", {

        title: "listas",
        users
    })
}

const formeDit = async (req,res)=>{
const {id} = req.query 
const {name, email} = req.body

//const user = await Model.findByid(id)

//user.name = name
//user.email = email

console.log(name,email, id)
 res.send("/")
}

module.exports={
        cad,
        lista,
        formeDit
    }