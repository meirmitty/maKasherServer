import express from 'express';
import {getAllKashrut} from "../services/kashruts-service";

const kashrutRouter = express.Router()

kashrutRouter.get('/', (req, res) => {
    res.send(getAllKashrut());
})

kashrutRouter.post("/add", (req, res) => {
    const body = req.body;
    console.log(body.id)
    console.log(body.hechsher)// res.send(addKashrut(req.body));
})

export {kashrutRouter}