import {model, Schema} from 'mongoose'

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    frete: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})


export default model('Product', ProductSchema)