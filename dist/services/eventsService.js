"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.setEvents = exports.getAllEvents = exports.addEvent = exports.updateEvent = void 0;
const events_json_1 = __importDefault(require("../jsons/events.json"));
const utils_1 = require("../utils/utils");
let events = [];
const setEvents = () => {
    events = utils_1.formatEvents(events_json_1.default);
};
exports.setEvents = setEvents;
const getAllEvents = () => {
    return events;
};
exports.getAllEvents = getAllEvents;
const deleteEvent = (id) => {
    events = events.filter((event) => {
        return event.id !== id;
    });
};
exports.deleteEvent = deleteEvent;
const addEvent = (event) => {
    if (utils_1.validateEvent(event)) {
        event.id = String(Number(events[events.length - 1].id) + 1);
        events.push(event);
        return 200;
    }
    else {
        return 500;
    }
};
exports.addEvent = addEvent;
const updateEvent = (updatedEvent) => {
    if (utils_1.validateEvent(updatedEvent)) {
        const originalEvent = events.find((task) => {
            return task.id === updatedEvent.id;
        });
        if (originalEvent) {
            events[events.indexOf(originalEvent)] = updatedEvent;
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
exports.updateEvent = updateEvent;
//# sourceMappingURL=eventsService.js.map