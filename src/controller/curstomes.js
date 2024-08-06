
const { criptor } = require("../ultils/password.js")
const { Model } = require("../module/curstomes")
const curstomesModel = require("../module/curstomes")


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


 res.send("teste")
}


module.exports={
        cad,
        lista,
        formeDit
    }