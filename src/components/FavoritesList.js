import React from "react";
import Card from "@/components/Card";

const FavoritesList = ({ favorites }) => {
    return (
        <>
            {favorites.map((shop) => (
                <Card
                    key={shop._id}
                    id={shop._id}
                    name={shop.name}
                    location={shop.location}
                    image={shop.image}

                    // mapURL={shop.mapURL}
                    // description={shop.description}
                />
            ))}
        </>
    );
};

export default FavoritesList;
