import {Kashrut} from "../mongoose/KashrutSchema";

export interface Kashrut {
    _id: string
    name: string
    kashrut: string
}

const kashruts: Kashrut[] = [];

const getAllKashrut = () => {
    return kashruts;
}


const addKashrut = async ({id, name, picture}: { id: string, name: string, picture: string }) => {
    const filter = {_id: id};
    const kashrutToSave = {_id: id, name, picture}

    return Kashrut.findOneAndUpdate(filter, kashrutToSave, {
        upsert: true // Make this update into an upsert
    });
}

export {addKashrut}


export {getAllKashrut}