const bcrypt = require('bcrypt')

async function criptor(valor){

   
const salt = await bcrypt.genSalt()
const pass = await bcrypt.hash(valor,salt)
 
return pass

}

module.exports={
    criptor
}