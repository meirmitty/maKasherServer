import express from 'express';
import {getAllResturantsFromGoogle, deleteResturant} from "../services/resturants-service";

const resturantsRouter = express.Router()

resturantsRouter.get('/:longitude/:latitude', async (req, res) => {
    res.send(await getAllResturantsFromGoogle({
        longitude: Number(req.params.longitude),
        latitude: Number(req.params.latitude)
    }));
})

resturantsRouter.delete('/delete/:id', (req, res) => {
    console.log('delete event')
    deleteResturant(req.params.id);
    res.send(200);
})


export {resturantsRouter}