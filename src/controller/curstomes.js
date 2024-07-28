
const { Model } = require("../module/curstomes")


const cad = (req, res)=>{
const {name, password} = req.body

const registro = new Model({

    name,
    password,
})
registro.save()

res.redirect("/")
}

    

module.exports={
        cad
    }