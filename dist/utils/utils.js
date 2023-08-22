"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = exports.validateEvent = exports.formatEvents = exports.formatTasks = void 0;
const formatTasks = (tasks) => {
    tasks.map((task) => {
        if (task.hasOwnProperty("untilDate")) {
            task.untilDate = new Date(task.untilDate);
        }
        return task;
    });
    return tasks;
};
exports.formatTasks = formatTasks;
function validateKeyIsInTask(key) {
    return (key === "type" || key === "title" || key === "review" || key === "timeSpent" || key === "untilDate" || key === "estimatedTime" || key === "priority" || key === "status" || key === "id" || key === "description");
}
function validateKeyIsInEvent(key) {
    return (key === "type" || key === "title" || key === "beginningTime" || key === "endingTime" || key === "color" || key === "invitedGuests" || key === "notificationTime" || key === "location" || key === "id" || key === "description");
}
const validateTask = (task) => {
    let key;
    for (key in task) {
        if (task.hasOwnProperty(key)) {
            if (!validateKeyIsInTask(key)) {
                return false;
            }
        }
    }
    return true;
};
exports.validateTask = validateTask;
const validateEvent = (event) => {
    let key;
    for (key in event) {
        if (event.hasOwnProperty(key)) {
            if (!validateKeyIsInEvent(key)) {
                return false;
            }
        }
    }
    return true;
};
exports.validateEvent = validateEvent;
const formatEvents = (events) => {
    const newEvents = [];
    events.map((event) => {
        if (event.hasOwnProperty("endingTime")) {
            event.endingTime = new Date(event.endingTime);
        }
        if (event.hasOwnProperty("beginningTime")) {
            event.beginningTime = new Date(event.beginningTime);
        }
        if (event.hasOwnProperty("notificationTime")) {
            event.notificationTime = new Date(event.notificationTime);
        }
        newEvents.push(event);
    });
    return newEvents;
};
exports.formatEvents = formatEvents;
//# sourceMappingURL=utils.js.map