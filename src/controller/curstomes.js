
const { Model } = require("../module/curstomes")


const cad = (req, res)=>{
const {name, password} = req.body

const registro = new Model({

    name,
    password,
})
registro.save()

    res.rendict("ola mundo")    
}

    

module.exports={
        cad
    }