import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoritesList from "@/components/FavoritesList.js";
import Navbar from "@/components/Navbar";

const PageContainer = styled.div`
    background-image: url("https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/329395598_903465677461064_341034161008898629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WGvMxhAeNssAX_a-dh3&_nc_ht=scontent-ber1-1.xx&oh=00_AfCUXyBlUhJJ0hOleiizsif1Rz-msxOcS3DG5rRwT7vkkQ&oe=64D3E62B");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
`;

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
        <PageContainer>
            <h1>Favorites Page</h1>
            {/* Pass the favorites array to FavoritesList */}
            <FavoritesList favorites={favorites} />
            <Navbar />
        </PageContainer>
    );
};

export default FavoritesPage;
