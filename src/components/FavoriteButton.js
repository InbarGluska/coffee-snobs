import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 15px;
    margin: 0px;
    margin-left: 700px;
    font-size: 50px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #a47e3b;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 1rem;
    width: 2%;
`;

const FavoriteButton = ({ shop, isFavorite, onToggleFavorite }) => {
    const handleToggle = () => {
        if (typeof onToggleFavorite === "function") {
            onToggleFavorite(shop);
        }
    };

    return (
        <ButtonContainer onClick={handleToggle}>
            {isFavorite ? (
                <FaHeart color="red" size={30} />
            ) : (
                <FaRegHeart size={30} />
            )}
        </ButtonContainer>
    );
};

export default FavoriteButton;
