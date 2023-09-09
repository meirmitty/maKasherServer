import express from 'express';
import {getAllResturantsFromGoogle} from "../services/resturants-service";

const resturantsRouter = express.Router()

resturantsRouter.get('/:longitude/:latitude', async (req, res) => {
    res.send(await getAllResturantsFromGoogle({
        longitude: Number(req.params.longitude),
        latitude: Number(req.params.latitude)
    }));
})



export {resturantsRouter}