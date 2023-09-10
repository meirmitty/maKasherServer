import {Kashrut} from "../mongoose/KashrutSchema";

export interface KashrutType {
    _id: string
    name: string
    picture: string
}

const kashruts: KashrutType[] = [];

const getAllKashrut = () => {
    return kashruts;
}

const addKashrut = async ({_id, name, picture}: KashrutType) => {
    const filter = {_id};

    const kashrutToSave = {_id, kashrut: name, picture}

    return Kashrut.findOneAndUpdate(filter, kashrutToSave, {
        upsert: true // Make this update into an upsert
    });
}

export {addKashrut}


export {getAllKashrut}