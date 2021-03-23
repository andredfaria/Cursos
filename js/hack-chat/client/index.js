import Events from 'events'
import TerminalController from "./src/terminalController.js";

const componentEmitter = Events()

const controller = TerminalController()
await controller.initializeTable(componentEmitter)