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

const getAllResturants = () => {
    console.log('here')
    return resturants;
}

const deleteResturant = (id: string) => {
    resturants = resturants.filter((resturant) => {
        return resturant.id !== id;
    })
}


export {getAllResturants, setResturants, deleteResturant}