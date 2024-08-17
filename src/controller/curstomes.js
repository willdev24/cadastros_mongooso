
const { criptor } = require("../ultils/password.js")
const curstomesModel = require("../module/curstomes")
const { name } = require("ejs")

async function cad(req, res){
const {name, password, email} = req.body

    const senha = await criptor(password)//
    const registro = new curstomesModel.Model({
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

const user = await curstomesModel.Model.findById(id)

user.name = name
user.email = email

user.save()
 res.redirect("/")
}


const delet = async (req, res)=>{
    const {id} = req.query
    const excluir = await curstomesModel.Model.deleteOne({_id:id})  
 
 //if(excluir.ok){
   res.redirect("/")
 //}

}


module.exports={
        cad,
        lista,
        formeDit,
        delet
    }