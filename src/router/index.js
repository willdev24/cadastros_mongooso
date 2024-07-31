const router = require('express').Router()

const controllindex = require("../controller/index") 
const controllCadastro= require("../controller/curstomes")

router.get("/" ,controllindex.add)

router.get("/cadastro", controllindex.add02)

router.post("/cadastro/clientes", controllCadastro.cad)

router.use("",(req, res)=>{
    res.send("erro, atualize a pagna")
   })

module.exports={
    router
}

