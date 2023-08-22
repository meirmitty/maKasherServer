"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRouter = void 0;
const express_1 = __importDefault(require("express"));
const tasksService_1 = require("../services/tasksService");
const tasksRouter = express_1.default.Router();
exports.tasksRouter = tasksRouter;
tasksRouter.get('/', (req, res) => {
    console.log('in get all');
    res.send(tasksService_1.getAllTasks());
});
tasksRouter.delete('/delete/:id', (req, res) => {
    console.log('delete task');
    tasksService_1.deleteTask(req.params.id);
    res.send(200);
});
tasksRouter.post("/add", (req, res) => {
    console.log('add task');
    res.send(tasksService_1.addTask(req.body));
});
tasksRouter.patch("/update", (req, res) => {
    console.log(" update task");
    res.send(tasksService_1.updateTask(req.body));
});
//# sourceMappingURL=tasks.js.map