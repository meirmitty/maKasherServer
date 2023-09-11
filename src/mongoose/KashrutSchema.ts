import {Schema} from "mongoose";
import mongoose from "mongoose";

const KashrutSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    kashrut: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
})

export const KashrutModel = mongoose.model('KashrutSchema', KashrutSchema);

