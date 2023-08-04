import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "@/components/StyledLink";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

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
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
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
    );
}
