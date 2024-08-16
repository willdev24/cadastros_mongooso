const express = require('express')
const path = require('path')
const { router } = require('./router')
const DB = require('./database')

const app = express()


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname , "public")))
app.set( "views", path.join(__dirname , "views"))
app.use(express.urlencoded({extended:true}))


//banco de dados
DB.conect()


//atualizar bando de dados 

// rotas
app.use("/", router)


const port = process.env.PORT || 8080
app.listen(port , function(){
    console.log(`servidor rodando na pota ${port}`)
})