const mongoose = require("mongoose")


    const schema = new mongoose.Schema({

        name: String,
        password:String,
        
        })
            
const Model = new mongoose.model('cadastro', schema)


     
module.exports={

Model
}
    