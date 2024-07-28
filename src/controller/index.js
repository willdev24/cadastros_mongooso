function add(req, res){

res.render("index")

}

const add02 = (req, res)=>{
  
    res.render("cadastros")
}

module.exports={
    add,
    add02
}