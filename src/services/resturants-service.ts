import axios from "axios";

export interface Resturants {
    id: string,
    location: string,
    name: string,
    restaurantFilters: [],
    contact: number,
}

export interface Position {
    longitude: number
    latitude: number
}

const getAllResturantsFromGoogle = async (location: Position) => {
    const newURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg&location=${location.latitude},${location.longitude}&radius=5000&type=restaurant`
    const response = await axios.get(newURL);
    if (response.data.error_message) {
        return response.data.error_message;
    }

    return response.data.results
}

export {getAllResturantsFromGoogle}