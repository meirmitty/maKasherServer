import axios from "axios";
import {KashrutModel} from "../mongoose/KashrutSchema";

export interface Position {
    longitude: string
    latitude: string
}

const getAllResturantsFromGoogle = async (location: Position) => {
    const newURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg&location=${location.latitude},${location.longitude}&radius=5000&type=restaurant`
    const response = await axios.get(newURL);
    if (response.data.error_message) {
        return response.data.error_message;
    }

    return response.data.results
}

const getAllResturants = async ({longitude, latitude}: Position) => {
    const resturants = await getAllResturantsFromGoogle({
        longitude,
        latitude
    });

    return await Promise.all(resturants.map(async (resturant: any) => {
        const kashrutResponse = await KashrutModel.findOne({_id: resturant.place_id})
        return {...resturant, ...kashrutResponse}
    }))

}

export {getAllResturants}