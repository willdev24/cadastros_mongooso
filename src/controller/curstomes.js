
const { criptor } = require("../../ultils/password.js")
const { Model } = require("../module/curstomes")


const cad = async (req, res)=>{
const {name, password} = req.body

   // const senha = await criptor(password)//

    const registro = new Model({
        name,
        password
    })

registro.save()

res.redirect("/")
}
  
    

module.exports={
        cad
    }