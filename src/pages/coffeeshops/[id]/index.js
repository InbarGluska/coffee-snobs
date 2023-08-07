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
import { BiArrowBack } from "react-icons/bi";

const PageContainer = styled.div`
    background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_JIu-X1CQ5IeMtCEnbjVRgwrGhZoii-iC0Ya7qKyuUFy5GlavWwWSn4ZnaHqzw2jtLcD1Mh3_BG5Qqa8gefG9rTM64bw9a7YqJDV9iRpLQx7mr4tV8izSlv1BMpOSp_18ZsfrSl9_fI2MPNmlueXWnL973jAXSHXZTX2RvroVEAv9hN-0tbtbH5MEy--KGHItEVvKkbw_n5od9xELiOOng4osMkVwsH8eSyMXkUgy4cKauivNDmQ_QxtNPALHm_UgsOMVAI-bb2bkFStFAGKd8fSiFW8ZFV51R5APOw1bWMw40qzSKfQCMl0lLGw8cn_M6SoXIlyZbt3dDja48IlTgN8pl0ZwqyaK_iGd94X8nvkYR9s-ah2MUU5QP-ZDRqgfnvvbpq1_QtkWq_KNHXBhgA341TgQpG7TStyGYPdjRct-KhexpU3K4a9Y-Lp6HVK_7xr2U-zuREdmH4C6-7hmyN3pPdPIQii8JeRTJn2LVaWM3OMU8nIxGjsmxjxkqv2XqkNPG8tlgMbx8nasIpZ71111LRXrz1PRj8BBAInhtXd4S93NxnDrfLqVPiBcRVKoQzuu9RHVKRBtFNgJLSCZBdG6pMEsbxoH9sJ_7tMckoGdmaGkdrkrnDucIO62FPVeQ79BrjMWmtiVZflLFmq7LnOqRwUPEBuoB2Ve6lgFTM0HxUtRzMdL6UdaZk2h14g9y4hVEI6ovZHVBo96Vp4Gw4S3n1wJ3f9wfQMhMoJtKHT0mJWIXIWvT1ixiCQ2-B5clJznyVtRxP6ZLO4ariI28DYGeNvFRykML03yMSm-7HqLnI4J1k93unqAJzXQUkBEWPaqvA5VUuyR7gCNlbTSZgiS-HbdvCfmjCPIpnUhzWO8qBXJ5cC4ODeJ9thAscpQYx2ftZ5rUfkihLO227askhA=w1326-h884-s-no?authuser=0");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
`;

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

const Loading = styled.div`
    margin-top: 2rem;
    background-image: url("https://cdn.dribbble.com/users/2520294/screenshots/7209485/media/cf226d98a06282e9cabf5c2f8f6d547f.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export default function DetailsPage() {
    const router = useRouter();
    const { isReady } = router;
    const { push } = router;
    const { id } = router.query;

    const { data: shop, isLoading, error } = useSWR(`/api/shops/${id}`);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(storedFavorites.some((favorite) => favorite._id === id));
    }, [id]);

    const handleFavorites = () => {
        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
        if (storedFavorites.some((favorite) => favorite._id === id)) {
            const updatedFavorites = storedFavorites.filter(
                (favorite) => favorite._id !== id
            );
            setIsFavorite(false);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...storedFavorites, shop];
            setIsFavorite(true);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
    };

    if (isLoading) return <Loading />;
    if (error) return <h2>Error loading data</h2>;
    if (!isReady || isLoading || error) return <Loading />;

    return (
        <>
            <PageContainer>
                <Link href={"/coffeeshops"} passHref legacyBehavior>
                    <StyledLink justifySelf="start">
                        <BiArrowBack />
                    </StyledLink>
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
                <FavoriteButton
                    isFavorite={isFavorite}
                    onToggleFavorite={handleFavorites}
                />
                <Reviews shopId={id} />
                <Navbar />
            </PageContainer>
        </>
    );
}
