import {Router } from "express"
import { SettingsContext } from "twilio/lib/rest/voice/v1/dialingPermissions/settings"
import { SettingsController } from "./controllers/SettingsControllers"

const routes = Router()

//tipos de parametros
//  Routes Params => parametros de rota
//  Query Params => filtros e buscas
//  Body Params =>
const settingsController = new SettingsController()
routes.post("/settings",settingsController.create)
export{routes}