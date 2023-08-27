import {default as JsonResturants} from '../jsons/resturants.json'
import axios from "axios";

export interface Resturants {
    id: string,
    location: string,
    name: string,
    restaurantFilters: [],
    contact: number,
}

let resturants: Resturants[] = [];

const setResturants = () => {
    resturants = JsonResturants as unknown as Resturants[];
}

const getAllResturants = async () => {
    const ourURL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ3_279V3EAhUROO_7ElUqB-A&type=resturaunt&fields=name&key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg";
    const thereUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg"
    const newURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg&location=31.7063076,34.9988185&radius=5000&type=restaurant"
    // tslint:disable-next-line:no-shadowed-variable
    const response = await axios.get(newURL).then((response)=>{
        console.log('succes')
        console.log(response.data)
    }).catch((err)=>{
        console.log(err)
    })
    return response;
}

const deleteResturant = (id: string) => {
    resturants = resturants.filter((resturant) => {
        return resturant.id !== id;
    })
}


export {getAllResturants, setResturants, deleteResturant}