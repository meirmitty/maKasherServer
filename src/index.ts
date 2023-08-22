import express from "express";
import cors from "cors";
import {resturantsRouter} from "./routes/resturants-router";
import {setKashruts} from "./services/kashruts-service";
import {kashrutRouter} from "./routes/kashruts-router";
import {getAllResturants, setResturants} from "./services/resturants-service";

const port = 3000;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/resturants", resturantsRouter);
app.use("/kashruts", kashrutRouter)


app.listen(port, () => {
    setResturants();
    getAllResturants()
    setKashruts()
    console.log('listening on ' + port)
});