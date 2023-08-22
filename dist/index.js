"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const resturants_router_1 = require("./routes/resturants-router");
const resturants_service_1 = require("./services/resturants-service");
const port = 3000;
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/resturants", resturants_router_1.resturantsRouter);
app.listen(port, () => {
    resturants_service_1.setResturants();
    console.log('listening on ' + port);
});
//# sourceMappingURL=index.js.map