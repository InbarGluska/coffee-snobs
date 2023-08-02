import mongoose from "mongoose";

const { Schema } = mongoose;

const shopSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    mapURL: { type: String, required: true },
    description: { type: String, required: true },
});

const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);

export default Shop;
