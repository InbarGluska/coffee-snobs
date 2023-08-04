// FavoritesList.js
import React from "react";

const FavoritesList = ({ favorites }) => {
    return (
        <ul>
            {favorites.map((favorite) => (
                <li key={favorite._id}>
                    {/* Display your favorite item details here */}
                    {favorite.name} - {favorite.location}
                </li>
            ))}
        </ul>
    );
};

export default FavoritesList;
