const router = require('express').Router()

const controllindex = require("../controller/index") 
const controllCadastro= require("../controller/curstomes")

router.get("/" ,controllindex.add)

router.get("/cadastro", controllindex.add02)

router.post("/cadastro/clientes", controllCadastro.cad)

router.get("/listar", controllCadastro.lista)

router.get("/edit" , controllindex.addeDit)

router.post("/edit" , controllCadastro.formeDit)


router.use("",(req, res)=>{
    res.send("erro, atualize a pagna")
   })

module.exports={
    router
}

