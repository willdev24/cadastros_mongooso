function add(req, res){

res.render("index")

}

const add02 = (req, res)=>{
  
    res.render("cadastros")
}

const addeDit = async (req,res)=>{

    res.render("editar.ejs")
   }
   

module.exports={
    add,
    add02,
    addeDit
}