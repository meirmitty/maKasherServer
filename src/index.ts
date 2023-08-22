import express from "express";
import cors from "cors";
import {resturantsRouter} from "./routes/resturants-router";
import {setResturants} from "./services/resturants-service";

const port = 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use("/resturants", resturantsRouter);


app.listen(port, () => {
    setResturants();
    console.log('listening on ' + port)
});