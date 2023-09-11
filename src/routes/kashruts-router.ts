import express from 'express';
import {addKashrut, KashrutType} from "../services/kashruts-service";

const kashrutRouter = express.Router()

kashrutRouter.post("/add", (req, res) => {
    res.send(addKashrut(req.body as KashrutType))
})

export {kashrutRouter}