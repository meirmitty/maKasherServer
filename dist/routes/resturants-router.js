"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resturantsRouter = void 0;
const express_1 = __importDefault(require("express"));
const resturants_service_1 = require("../services/resturants-service");
const resturantsRouter = express_1.default.Router();
exports.resturantsRouter = resturantsRouter;
resturantsRouter.get('/', (req, res) => {
    console.log('in get all');
    res.send(resturants_service_1.getAllResturants());
});
resturantsRouter.delete('/delete/:id', (req, res) => {
    console.log('delete event');
    resturants_service_1.deleteResturant(req.params.id);
    res.send(200);
});
//# sourceMappingURL=resturants-router.js.map