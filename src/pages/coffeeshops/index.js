import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "@/components/StyledLink";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const PageContainer = styled.div`
    background-image: url("https://lh3.googleusercontent.com/pw/AIL4fc_JIu-X1CQ5IeMtCEnbjVRgwrGhZoii-iC0Ya7qKyuUFy5GlavWwWSn4ZnaHqzw2jtLcD1Mh3_BG5Qqa8gefG9rTM64bw9a7YqJDV9iRpLQx7mr4tV8izSlv1BMpOSp_18ZsfrSl9_fI2MPNmlueXWnL973jAXSHXZTX2RvroVEAv9hN-0tbtbH5MEy--KGHItEVvKkbw_n5od9xELiOOng4osMkVwsH8eSyMXkUgy4cKauivNDmQ_QxtNPALHm_UgsOMVAI-bb2bkFStFAGKd8fSiFW8ZFV51R5APOw1bWMw40qzSKfQCMl0lLGw8cn_M6SoXIlyZbt3dDja48IlTgN8pl0ZwqyaK_iGd94X8nvkYR9s-ah2MUU5QP-ZDRqgfnvvbpq1_QtkWq_KNHXBhgA341TgQpG7TStyGYPdjRct-KhexpU3K4a9Y-Lp6HVK_7xr2U-zuREdmH4C6-7hmyN3pPdPIQii8JeRTJn2LVaWM3OMU8nIxGjsmxjxkqv2XqkNPG8tlgMbx8nasIpZ71111LRXrz1PRj8BBAInhtXd4S93NxnDrfLqVPiBcRVKoQzuu9RHVKRBtFNgJLSCZBdG6pMEsbxoH9sJ_7tMckoGdmaGkdrkrnDucIO62FPVeQ79BrjMWmtiVZflLFmq7LnOqRwUPEBuoB2Ve6lgFTM0HxUtRzMdL6UdaZk2h14g9y4hVEI6ovZHVBo96Vp4Gw4S3n1wJ3f9wfQMhMoJtKHT0mJWIXIWvT1ixiCQ2-B5clJznyVtRxP6ZLO4ariI28DYGeNvFRykML03yMSm-7HqLnI4J1k93unqAJzXQUkBEWPaqvA5VUuyR7gCNlbTSZgiS-HbdvCfmjCPIpnUhzWO8qBXJ5cC4ODeJ9thAscpQYx2ftZ5rUfkihLO227askhA=w1326-h884-s-no?authuser=0");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
`;

const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-left: 0;
    margin-bottom: 3rem;
`;

const ListItem = styled.li`
    position: relative;
    width: 100%;
    max-width: 400px; /* Set the maximum width for each card */
    margin: 0 auto; /* Center the cards */
`;

const SearchBar = styled.input`
    width: 300px;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px #a47e3b;
    border-radius: 4px;
    margin-bottom: 5px;
    margin-top: 8px;
`;

export default function CoffeeShops() {
    const { data } = useSWR("/api/shops", { fallbackData: [] });

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter the data based on the search query
    const filteredData = data.filter(
        (shop) =>
            shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shop.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <PageContainer>
            <CenteredContainer>
                <SearchBar
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
                <List role="list">
                    {filteredData.map((shop) => {
                        return (
                            <ListItem key={shop._id}>
                                <Card
                                    id={shop._id}
                                    name={shop.name}
                                    location={shop.location}
                                    image={shop.image}
                                    mapURL={shop.mapURL}
                                    description={shop.description}
                                />
                            </ListItem>
                        );
                    })}
                </List>
                <Navbar />
            </CenteredContainer>
        </PageContainer>
    );
}
