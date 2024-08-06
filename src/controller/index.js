const { Model } = require("../module/curstomes")

function add(req, res){

res.render("index")

}

const add02 = (req, res)=>{
  
    res.render("cadastros")
}

const addeDit = async (req,res)=>{

    const {id}= req.query
    const lis= await Model.findById(id) 


    res.render("editar.ejs",{
        title:"editar_cadastro",
        user: lis,

    })
   }
 
   

module.exports={
    add,
    add02,
    addeDit
}