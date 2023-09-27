import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoritesList from "@/components/FavoritesList.js";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { StyledLink } from "@/components/StyledLink";

const PageContainer = styled.div`
    background-image: url("https://i.ibb.co/Tb5bf9t/E-amp-C10.jpg");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
    margin-bottom: 2rem;
`;

export const StyledFavoritesH2 = styled.div`
    /* display: inline-block; */
    padding: 10px 15px;
    font-size: 37px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #a47e3b;
    border-radius: 0px;
    /* cursor: pointer; */
    transition: background-color 0.3s ease;
    margin-bottom: 0rem;
    /* margin-top: 1rem; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
            <StyledFavoritesH2>My Favorites</StyledFavoritesH2>
            <CenteredContainer>
                <FavoritesList favorites={favorites} />
                <Navbar />
            </CenteredContainer>
        </PageContainer>
    );
};

export default FavoritesPage;
