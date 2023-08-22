import {default as JsonResturants} from '../jsons/resturants.json'
import axios from "axios";

export interface Resturants {
    id: string,
    location: string,
    name: string,
    kashrut: string,
    restaurantFilters: [],
    contact: number,
    mashgiachNum: number
}

let resturants: Resturants[] = [];

const setResturants = () => {
    resturants = JsonResturants as unknown as Resturants[];
}

const getAllResturants = async () => {
    const ourURl = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ3_279V3EAhUROO_7ElUqB-A&type=resturaunt&fields=name&key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg";
    const thereUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyB0UZEfccGHd_GUDy8gI6dqzqvU8pWuDQg"

    // tslint:disable-next-line:no-shadowed-variable
    const response = await axios.get(ourURl).then((response)=>{
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