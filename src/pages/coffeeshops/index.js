import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "@/components/StyledLink";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const PageContainer = styled.div`
    background-image: url("https://i.ibb.co/Tb5bf9t/E-amp-C10.jpg");
    background-size: 100%;
    min-height: 100vh;
    background-attachment: fixed;
`;

const CenteredContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-left: 0;
    margin-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ListItem = styled.li`
    position: relative;
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
