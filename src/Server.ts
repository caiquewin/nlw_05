import express from 'express'

const app = express();

/*
* GET = Buscas
* POST = Criação
* DELETE = Deletar
* PATH = Alterar uma informação especifica
*/

app.get("/",(request,response)=>{
    return response.json({
        message:"Ola NLW 05 🤞"
    })
})

//ROTA DE POST
app.post("/",(request,response) =>{
    return response.json({
        message:"Usuário salvo com sucesso ✔"
    })
})

app.listen(3333,()=>console.log("Está funcionando 🧙‍♂️"));