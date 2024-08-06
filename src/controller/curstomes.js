
const { criptor } = require("../ultils/password.js")
const { Model } = require("../module/curstomes")
const curstomesModel = require("../module/curstomes")


async function cad(req, res){
const {name, password} = req.body

    const senha = await criptor(password)//
    const registro = new Model({
        name,
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

module.exports={
        cad,
        lista 
    }