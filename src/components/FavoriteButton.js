// FavoritesButton.js
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ shop, isFavorite, onToggleFavorite }) => {
    const handleToggle = () => {
        if (typeof onToggleFavorite === "function") {
            onToggleFavorite(shop); // Pass the shop to the onToggleFavorite function from props
        }
    };

    return (
        <button onClick={handleToggle}>
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
    );
};

export default FavoriteButton;
