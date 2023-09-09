import express from "express";
import cors from "cors";
import {resturantsRouter} from "./routes/resturants-router";
import {setKashruts} from "./services/kashruts-service";
import {kashrutRouter} from "./routes/kashruts-router";
import {setResturants} from "./services/resturants-service";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use("/resturants", resturantsRouter);
app.use("/kashruts", kashrutRouter)


app.listen(port, () => {
    setResturants();
    setKashruts()
    console.log('listening on ' + port)
});