import express from 'express';
import {addKashrut, deleteKashrut, getAllKashrut, updateKashrut} from "../services/kashruts-service";

const kashrutRouter = express.Router()

kashrutRouter.get('/', (req, res) => {
    console.log('in get all')
    res.send(getAllKashrut());
})

kashrutRouter.delete('/delete/:id', (req, res) => {
    console.log('delete task')
    deleteKashrut(req.params.id);
    res.send(200);
})

kashrutRouter.post("/add", (req, res) => {
    console.log('add task')
    res.send(addKashrut(req.body));
})

kashrutRouter.patch("/update", (req, res) => {
    console.log(" update task")
    res.send(updateKashrut(req.body));
})

export {kashrutRouter}