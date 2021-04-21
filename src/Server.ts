import express from 'express'


import "./database"// vai importa o index 

import {routes} from "./routes"
const app = express();

app.use(express.json())

app.use(routes)
/*
* GET = Buscas
* POST = Criação
* DELETE = Deletar
* PATH = Alterar uma informação especifica
*/

app.listen(3333,()=>console.log("Está funcionando 🧙‍♂️"));