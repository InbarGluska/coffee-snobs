// FavoritesPage.js
import React, { useState, useEffect } from "react";
import FavoritesList from "@/components/FavoritesList.js";
import Navbar from "@/components/Navbar";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from local storage on component mount
    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Function to handle adding/removing item to/from favorites
    const handleToggleFavorite = (shop) => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        const isShopInFavorites = storedFavorites.some(
            (favorite) => favorite._id === shop._id
        );
        let updatedFavorites = [];

        if (isShopInFavorites) {
            // Remove the shop from favorites
            updatedFavorites = storedFavorites.filter(
                (favorite) => favorite._id !== shop._id
            );
        } else {
            // Add the shop to favorites
            updatedFavorites = [...storedFavorites, shop];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div>
            <h1>Favorites Page</h1>
            {/* Pass the favorites array to FavoritesList */}
            <FavoritesList favorites={favorites} />
            <Navbar />
        </div>
    );
};

export default FavoritesPage;
