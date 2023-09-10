import express from "express";
import cors from "cors";
import {resturantsRouter} from "./routes/resturants-router";
import {kashrutRouter} from "./routes/kashruts-router";
import bodyParser from "body-parser";
import * as mongoose from "mongoose";

const main = async () => {
    const port = 3000;
    const app = express();
    app.use(cors());

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(express.json());
    app.use("/resturants", resturantsRouter);
    app.use("/kashruts", kashrutRouter)


    await mongoose.connect(`mongodb://localhost:27017/kashrut`)

    app.listen(port, () => {
        console.log('listening on ' + port)
    });
}

main().catch(() => {
    console.log('there was a error')
})