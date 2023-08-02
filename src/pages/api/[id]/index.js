import dbConnect from "../../../../db/connect";
import Shop from "../../../../db/models/Shop";

export default async function handler(request, response) {
    await dbConnect();
    const { id } = request.query;

    if (!id || id === "undefined") {
        return;
    }

    if (request.method === "GET") {
        try {
            const shop = await Shop.findById(id);

            if (!shop) {
                return response.status(404).json({ status: "Not found" });
            }

            response.status(200).json(place);
        } catch (error) {
            response.status(500).json({ status: "Internal Server Error" });
            console.log(error);
        }
    }
}
