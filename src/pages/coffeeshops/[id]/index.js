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
    background-image: url("https://lh3.googleusercontent.com/fife/AKsag4OctztB4Y7Qjvse5NBm0zgFx1p7-EURPN_cDGmo8l2UQ2z1fYjYDcmWP0V1Sxalq6SBltS5lRn3bjDTzDEl67nwD_HO58-xpAb9Vu58PTEQusA-AkZRqj_RHCTQPIucDZo7YSAa3UDSgewqrdIuji56UiF9zhj1O6QqsrA4yiEs0XNUi_JemakZ2R_gR5CWSxAcVyvzFYags74ujgRgkMbFGGIPzHyZg9yqIXSuXsTGaRGicvKrn3PQEf2t6Pd2O3OCiSK8jD_9GK7TbdY4Vxvo1UCjqowcasotCmwAj-lsjoo9IQuWHqaywOVUAcFWx5MzEXhuskMONgkp44H8vbcAU4uWTZaZMwIB6znWFW8D9sXOAgDbWNyzsjCOu1mv51OtsQfdJfgN2aZfWcuAut5JhvDGNnMdkuPQ-x0P4ZTigMznx9o09ledDxBSfFIIjUZ5Xdl4RxFTeY2x3wIzoAKssyjnm2SVGDoXJuYwug_eHkqjUCppL3PRMWGX-wZxSOlIaxjV_rJlcHqpyL88Gg_2qQgnTX_boC1k950iof-GThyudjYfjADKDVSxw8BZaYq63Jg78ZAi82leYdn7dph-1NytMmJKz8JiGT7HQZxxv0MTZsB7rWEvrVNbm5xuXvCnlB_ZRpWg46J-8Lx8cmwxIknID_HD6bBNL4AFCGFHEr0E9un1bOtTlmGGiSfKvsVoPZAYu9pGdu4vfET90OtmliAHVOwEoayd18BQpDQLGOnPOhkBXIbf7IRiW3BZGHtC5G3DmYv8DXFrA8ApXqbWNDfIT0GsMH4wu7xu7wBBo94uV0fSPkXr54KHXwWOvCLJEgTvQ9lznvCxOBmchHbyY9W1J-WgcdC9IPiLH9HTaa0C9O0NaR-Cyk4OvsrAy3VFOtXFyfM_wKh0A0ToHxLWrcSUwFk_mKQuAEQO5w89JR_KeUmB1gDtkir1uqnUQCeqVmz2m0o0sz-wyn3DXQxfR1OQnr12jQTu8AphjMkMsZbyoYj4d6UGrsyvybfoJeE2-ShMXuaKXdr8gWy9dozxlta4xDsz7obnHshKP9rFExVJRjpMB3olOSTJRwzRXGApMeTewJH6D3RtXoetNrs73NPEcLP4jpxQpOcMxEbT4ED2q99CQStyRkgrGYfhJAaQ0rk1crgzoBqFq9JgUzYLdMZ3rZrP0sT_VDb1TD0kAKg18YQ-SFPAHkc_16Dkqc7zAqWQfm7cDzgZ0GkgP9chwRfRJ7lfZVuPZAfV74cEyqhqP1MjMj0ffqamRFrbb7LgV81lKMvlHo0RKjyuRsL9GtkA2RjCflQuYKwpUv0zZKiv0HnEqbRRFdCxOigXy0NJj2IURBMTTWcuHLmsLIperXf_M_iKeHfovmXi9Fiu6uxjy5bFhV9AblZYoabgyuDOFvC4naeJOhH4HS4Kakq6dKENwnprRQe85sJnB5lhSV71OsOUEQ2zbRnM9WZqxR7GOBRIV6wbGXxTLK7NOotnGVjUXxfIdZa5zkNT0P6rspBbluWvIsQ2W0wyOyaevZr5FaAarfCiAD1W-gTTzF_fXoZvM8qujj9e=s1326-w1326-h884-s-no?authuser=0");
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

const ListItem = styled.div`
    position: relative;
    width: 100%;
`;

const Loading = styled.div`
    margin-top: 2rem;
    background-image: url("https://lh3.googleusercontent.com/fife/AKsag4OctztB4Y7Qjvse5NBm0zgFx1p7-EURPN_cDGmo8l2UQ2z1fYjYDcmWP0V1Sxalq6SBltS5lRn3bjDTzDEl67nwD_HO58-xpAb9Vu58PTEQusA-AkZRqj_RHCTQPIucDZo7YSAa3UDSgewqrdIuji56UiF9zhj1O6QqsrA4yiEs0XNUi_JemakZ2R_gR5CWSxAcVyvzFYags74ujgRgkMbFGGIPzHyZg9yqIXSuXsTGaRGicvKrn3PQEf2t6Pd2O3OCiSK8jD_9GK7TbdY4Vxvo1UCjqowcasotCmwAj-lsjoo9IQuWHqaywOVUAcFWx5MzEXhuskMONgkp44H8vbcAU4uWTZaZMwIB6znWFW8D9sXOAgDbWNyzsjCOu1mv51OtsQfdJfgN2aZfWcuAut5JhvDGNnMdkuPQ-x0P4ZTigMznx9o09ledDxBSfFIIjUZ5Xdl4RxFTeY2x3wIzoAKssyjnm2SVGDoXJuYwug_eHkqjUCppL3PRMWGX-wZxSOlIaxjV_rJlcHqpyL88Gg_2qQgnTX_boC1k950iof-GThyudjYfjADKDVSxw8BZaYq63Jg78ZAi82leYdn7dph-1NytMmJKz8JiGT7HQZxxv0MTZsB7rWEvrVNbm5xuXvCnlB_ZRpWg46J-8Lx8cmwxIknID_HD6bBNL4AFCGFHEr0E9un1bOtTlmGGiSfKvsVoPZAYu9pGdu4vfET90OtmliAHVOwEoayd18BQpDQLGOnPOhkBXIbf7IRiW3BZGHtC5G3DmYv8DXFrA8ApXqbWNDfIT0GsMH4wu7xu7wBBo94uV0fSPkXr54KHXwWOvCLJEgTvQ9lznvCxOBmchHbyY9W1J-WgcdC9IPiLH9HTaa0C9O0NaR-Cyk4OvsrAy3VFOtXFyfM_wKh0A0ToHxLWrcSUwFk_mKQuAEQO5w89JR_KeUmB1gDtkir1uqnUQCeqVmz2m0o0sz-wyn3DXQxfR1OQnr12jQTu8AphjMkMsZbyoYj4d6UGrsyvybfoJeE2-ShMXuaKXdr8gWy9dozxlta4xDsz7obnHshKP9rFExVJRjpMB3olOSTJRwzRXGApMeTewJH6D3RtXoetNrs73NPEcLP4jpxQpOcMxEbT4ED2q99CQStyRkgrGYfhJAaQ0rk1crgzoBqFq9JgUzYLdMZ3rZrP0sT_VDb1TD0kAKg18YQ-SFPAHkc_16Dkqc7zAqWQfm7cDzgZ0GkgP9chwRfRJ7lfZVuPZAfV74cEyqhqP1MjMj0ffqamRFrbb7LgV81lKMvlHo0RKjyuRsL9GtkA2RjCflQuYKwpUv0zZKiv0HnEqbRRFdCxOigXy0NJj2IURBMTTWcuHLmsLIperXf_M_iKeHfovmXi9Fiu6uxjy5bFhV9AblZYoabgyuDOFvC4naeJOhH4HS4Kakq6dKENwnprRQe85sJnB5lhSV71OsOUEQ2zbRnM9WZqxR7GOBRIV6wbGXxTLK7NOotnGVjUXxfIdZa5zkNT0P6rspBbluWvIsQ2W0wyOyaevZr5FaAarfCiAD1W-gTTzF_fXoZvM8qujj9e=s1326-w1326-h884-s-no?authuser=0");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const BackButton = styled.button`
    background-color: #a47e3b;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-left: auto;
    font-size: 16px;
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
                    <BackButton justifySelf="start">
                        <BiArrowBack size={40} />
                    </BackButton>
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
