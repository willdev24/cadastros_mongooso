const bcrypt = require('bcrypt')



async function  criptor(valor){

const salt = await bcrypt.genSalt()
const password = await bcrypt.hash(valor,salt)
 
return password

}

module.exports={
    criptor
}