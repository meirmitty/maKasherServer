"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.addTask = exports.deleteTask = exports.setTasks = exports.getAllTasks = void 0;
const tasks_json_1 = __importDefault(require("../jsons/tasks.json"));
const utils_1 = require("../utils/utils");
let tasks = [];
const setTasks = () => {
    tasks = utils_1.formatTasks(tasks_json_1.default);
};
exports.setTasks = setTasks;
const getAllTasks = () => {
    return tasks;
};
exports.getAllTasks = getAllTasks;
const deleteTask = (id) => {
    tasks = tasks.filter((task) => {
        return task.id !== id;
    });
    return tasks;
};
exports.deleteTask = deleteTask;
const addTask = (task) => {
    if (utils_1.validateTask(task)) {
        task.id = String(Number(tasks[tasks.length - 1].id) + 1);
        tasks.push(task);
        return 200;
    }
    else {
        return 500;
    }
};
exports.addTask = addTask;
const updateTask = (updatedTask) => {
    if (utils_1.validateTask(updatedTask)) {
        const originalTask = tasks.find((task) => {
            return task.id === updatedTask.id;
        });
        if (originalTask) {
            tasks[tasks.indexOf(originalTask)] = updatedTask;
            return 200;
        }
        else {
            return 500;
        }
    }
    else {
        return 500;
    }
};
exports.updateTask = updateTask;
//# sourceMappingURL=tasksService.js.map