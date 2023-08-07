import React from "react";
import Card from "@/components/Card";
import styled from "styled-components";

const FavoritesContainer = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-left: 0;
    margin-bottom: 3rem;
`;

const FavoritesList = ({ favorites }) => {
    return (
        <FavoritesContainer>
            {favorites.map((shop) => (
                <Card
                    key={shop._id}
                    id={shop._id}
                    name={shop.name}
                    location={shop.location}
                    image={shop.image}
                />
            ))}
        </FavoritesContainer>
    );
};

export default FavoritesList;
