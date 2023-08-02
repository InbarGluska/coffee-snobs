import dbConnect from "../../../../db/connect";
import Shop from "../../../../db/models/Shop";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const shops = await Shop.find();
        return response.status(200).json(shops);
    } else {
        return response.status(405).json({ message: "Method not allowed" });
    }
}
