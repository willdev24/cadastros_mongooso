const mongoose = require("mongoose")


    const schema = new mongoose.Schema({

        name: String,
        password:String,
        email:String
        
        })
            
const Model = new mongoose.model('cadastros', schema)
     
module.exports={

Model
}
    