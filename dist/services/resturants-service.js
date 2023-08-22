"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResturant = exports.setResturants = exports.getAllResturants = void 0;
const resturants_json_1 = __importDefault(require("../jsons/resturants.json"));
let resturants = [];
const setResturants = () => {
    resturants = resturants_json_1.default;
};
exports.setResturants = setResturants;
const getAllResturants = () => {
    console.log('here');
    return resturants;
};
exports.getAllResturants = getAllResturants;
const deleteResturant = (id) => {
    resturants = resturants.filter((resturant) => {
        return resturant.id !== id;
    });
};
exports.deleteResturant = deleteResturant;
//# sourceMappingURL=resturants-service.js.map