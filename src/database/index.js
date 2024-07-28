const mongoose = require('mongoose')



function conect(){
mongoose.connect("mongodb://localhost:27017/primeiro_projeto")
const mongoDB = mongoose.connection
mongoDB.once("open",()=>{

    console.log("conectado ao banco de dados ")
})

mongoDB.on("error",console.error.bind(console, "erro ao conetar"))


}

module.exports={
    conect
}