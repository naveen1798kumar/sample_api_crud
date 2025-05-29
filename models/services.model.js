import { model, Schema } from "mongoose";

// write the Schema
const serviceSchema = new Schema({
    title: {
        type : String,
        required: true,
        unique: true,
    },
    desc: String,
})

// create your model
const serviceModel = model('Service', serviceSchema)

export default serviceModel;