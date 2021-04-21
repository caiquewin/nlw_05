import {Router } from "express"
import { UserContext } from "twilio/lib/rest/chat/v1/service/user"
import { SettingsContext } from "twilio/lib/rest/voice/v1/dialingPermissions/settings"
import { MessagesController } from "./controllers/MessagesControllers"
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"

const routes = Router()

//tipos de parametros
//  Routes Params => parametros de rota
//  Query Params => filtros e buscas
//  Body Params =>
const settingsController = new SettingsController()
const usersController= new UsersController();
const messagesController = new MessagesController()

routes.post("/settings",settingsController.create);
routes.post("/users", usersController.create);

routes.post("/messages",messagesController.create)
routes.get("/messages/:id",messagesController.showByUser)

export{routes}