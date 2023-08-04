import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";
import { StyledImage } from "../../../components/StyledImage.js";
import Card from "../../../components/Card[id].js";
import Navbar from "@/components/Navbar.js";
import Reviews from "@/components/Reviews.js";
import FavoriteButton from "@/components/FavoriteButton.js";
import FavoritesPage from "@/pages/favorites/index.js";

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-left: 0;
`;

const ListItem = styled.li`
    position: relative;
    width: 100%;
`;

export default function DetailsPage() {
    const router = useRouter();
    const { isReady } = router;
    const { push } = router;
    const { id } = router.query;

    const { data: shop, isLoading, error } = useSWR(`/api/shops/${id}`);

    // State to manage the favorite status
    const [isFavorite, setIsFavorite] = useState(false);

    // Load favorites from local storage on component mount
    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        // Check if the current shop is already in favorites
        setIsFavorite(storedFavorites.some((favorite) => favorite._id === id));
    }, [id]);

    // Function to handle adding/removing item to/from favorites
    const handleFavorites = () => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        // Check if the current shop is already in favorites
        if (storedFavorites.some((favorite) => favorite._id === id)) {
            // Remove the shop from favorites
            const updatedFavorites = storedFavorites.filter(
                (favorite) => favorite._id !== id
            );
            setIsFavorite(false);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
            // Add the shop to favorites
            const updatedFavorites = [...storedFavorites, shop];
            setIsFavorite(true);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
    };

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error loading data</h2>;
    if (!isReady || isLoading || error) return <h2>Loading...</h2>;

    return (
        <>
            <Link href={"/coffeeshops"} passHref legacyBehavior>
                <StyledLink justifySelf="start">back</StyledLink>
            </Link>
            <ListItem key={shop._id}>
                <Card
                    name={shop.name}
                    location={shop.location}
                    image={shop.image}
                    mapURL={shop.mapURL}
                    description={shop.description}
                />
            </ListItem>
            {/* Use the FavoritesButton component with the appropriate onClick handler */}
            <FavoriteButton
                isFavorite={isFavorite}
                onToggleFavorite={handleFavorites}
            />
            <Reviews shopId={id} />
            <Navbar />
            {/* Pass the isFavorite and shop props to FavoritesPage */}
            {isFavorite && (
                <FavoritesPage isFavorite={isFavorite} shop={shop} />
            )}
        </>
    );
}
