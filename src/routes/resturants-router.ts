import express from 'express';
import {getAllResturants} from "../services/resturants-service";

const resturantsRouter = express.Router()

resturantsRouter.get('/:longitude/:latitude', async (req, res) => {
    res.send(await getAllResturants({latitude: req.params.latitude, longitude: req.params.longitude}));
})


export {resturantsRouter}