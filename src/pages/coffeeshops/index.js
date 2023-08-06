import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "@/components/StyledLink";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const PageContainer = styled.div`
    background-image: url("https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/329395598_903465677461064_341034161008898629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WGvMxhAeNssAX_a-dh3&_nc_ht=scontent-ber1-1.xx&oh=00_AfCUXyBlUhJJ0hOleiizsif1Rz-msxOcS3DG5rRwT7vkkQ&oe=64D3E62B");
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
