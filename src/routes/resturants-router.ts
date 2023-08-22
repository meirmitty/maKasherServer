import express from 'express';
import {getAllResturants, deleteResturant} from "../services/resturants-service";

const resturantsRouter = express.Router()

resturantsRouter.get('/', (req, res) => {
    console.log('in get all')
    res.send(getAllResturants());
})

resturantsRouter.delete('/delete/:id', (req, res) => {
    console.log('delete event')
    deleteResturant(req.params.id);
    res.send(200);
})


export {resturantsRouter}