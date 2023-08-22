"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const eventsService_1 = require("../services/eventsService");
const eventsRouter = express_1.default.Router();
exports.eventsRouter = eventsRouter;
eventsRouter.get('/', (req, res) => {
    console.log('in get all');
    res.send(eventsService_1.getAllEvents());
});
eventsRouter.delete('/delete/:id', (req, res) => {
    console.log('delete event');
    eventsService_1.deleteEvent(req.params.id);
    res.send(200);
});
eventsRouter.post("/add", (req, res) => {
    console.log('add event');
    res.send(eventsService_1.addEvent(req.body));
});
eventsRouter.patch("/update", (req, res) => {
    console.log(" update event");
    res.send(eventsService_1.updateEvent(req.body));
});
//# sourceMappingURL=events.js.map