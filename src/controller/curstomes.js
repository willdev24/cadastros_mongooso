
const { criptor } = require("../ultils/password.js")
const { Model } = require("../module/curstomes")


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
  
    

module.exports={
        cad
    }