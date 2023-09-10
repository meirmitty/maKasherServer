import express from 'express';
import {addKashrut, getAllKashrut} from "../services/kashruts-service";

const kashrutRouter = express.Router()

kashrutRouter.get('/', (req, res) => {
    res.send(getAllKashrut());
})

kashrutRouter.post("/add", (req, res) => {
    res.send(addKashrut(req.body))
})

export {kashrutRouter}