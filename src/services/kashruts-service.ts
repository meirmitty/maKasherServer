import {default as JsonKashruts} from "../jsons/kashrut.json";

export interface Kashrut {
    id: string
    name: string
    kashrut: string
    contact: string
}

let kashruts: Kashrut[] = [];

const setKashruts = () => {
    kashruts = JsonKashruts as unknown as Kashrut[];
}

const getAllKashrut = () => {
    return kashruts;
}

const deleteKashrut = (id: string) => {
    kashruts = kashruts.filter((event) => {
        return event.id !== id;
    })
}

const addKashrut = (event: Event) => {
    console.log('add kashrut')
}

const updateKashrut = (updatedEvent: Event) => {
    console.log('update kashrut')
}

export {updateKashrut, addKashrut, getAllKashrut, setKashruts, deleteKashrut}