import express from 'express';
import {getAllResturantsFromGoogle} from "../services/resturants-service";
import {Kashrut} from "../mongoose/KashrutSchema";

const resturantsRouter = express.Router()

resturantsRouter.get('/:longitude/:latitude', async (req, res) => {
    const resturants = await getAllResturantsFromGoogle({
        longitude: Number(req.params.longitude),
        latitude: Number(req.params.latitude)
    })


    const fullResturants = await Promise.all(resturants.map(async (resturant: any) => {
        const hechsher = await Kashrut.findById(resturant.place_id).exec()
        return {...resturant, ...hechsher}
    }))

    res.send(fullResturants);
})


export {resturantsRouter}