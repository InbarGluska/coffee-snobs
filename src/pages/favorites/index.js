import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoritesList from "@/components/FavoritesList.js";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { StyledLink } from "@/components/StyledLink";

const PageContainer = styled.div`
    background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_JIu-X1CQ5IeMtCEnbjVRgwrGhZoii-iC0Ya7qKyuUFy5GlavWwWSn4ZnaHqzw2jtLcD1Mh3_BG5Qqa8gefG9rTM64bw9a7YqJDV9iRpLQx7mr4tV8izSlv1BMpOSp_18ZsfrSl9_fI2MPNmlueXWnL973jAXSHXZTX2RvroVEAv9hN-0tbtbH5MEy--KGHItEVvKkbw_n5od9xELiOOng4osMkVwsH8eSyMXkUgy4cKauivNDmQ_QxtNPALHm_UgsOMVAI-bb2bkFStFAGKd8fSiFW8ZFV51R5APOw1bWMw40qzSKfQCMl0lLGw8cn_M6SoXIlyZbt3dDja48IlTgN8pl0ZwqyaK_iGd94X8nvkYR9s-ah2MUU5QP-ZDRqgfnvvbpq1_QtkWq_KNHXBhgA341TgQpG7TStyGYPdjRct-KhexpU3K4a9Y-Lp6HVK_7xr2U-zuREdmH4C6-7hmyN3pPdPIQii8JeRTJn2LVaWM3OMU8nIxGjsmxjxkqv2XqkNPG8tlgMbx8nasIpZ71111LRXrz1PRj8BBAInhtXd4S93NxnDrfLqVPiBcRVKoQzuu9RHVKRBtFNgJLSCZBdG6pMEsbxoH9sJ_7tMckoGdmaGkdrkrnDucIO62FPVeQ79BrjMWmtiVZflLFmq7LnOqRwUPEBuoB2Ve6lgFTM0HxUtRzMdL6UdaZk2h14g9y4hVEI6ovZHVBo96Vp4Gw4S3n1wJ3f9wfQMhMoJtKHT0mJWIXIWvT1ixiCQ2-B5clJznyVtRxP6ZLO4ariI28DYGeNvFRykML03yMSm-7HqLnI4J1k93unqAJzXQUkBEWPaqvA5VUuyR7gCNlbTSZgiS-HbdvCfmjCPIpnUhzWO8qBXJ5cC4ODeJ9thAscpQYx2ftZ5rUfkihLO227askhA=w1326-h884-s-no?authuser=0");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
    margin-bottom: 2rem;
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
            <CenteredContainer>
                <FavoritesList favorites={favorites} />
                <Navbar />
            </CenteredContainer>
        </PageContainer>
    );
};

export default FavoritesPage;
