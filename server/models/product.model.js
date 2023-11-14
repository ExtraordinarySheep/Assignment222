import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    description: {
        type: String,
        
        required: 'Description is required'
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    quantity: {
        type: Number,
        required: 'Quantity is required'
    },
    category: {
        type: String,
        ref: 'Category',
        required: 'Category is required'
    }
}, {
    timestamps: true  
});




const Product = mongoose.model('Product', ProductSchema);


export default Product;
