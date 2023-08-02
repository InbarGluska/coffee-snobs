import styled from "styled-components";
import Card from "@/components/Card.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "@/components/StyledLink";

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

export default function CoffeeShops() {
    const { data } = useSWR("/api/shops", { fallbackData: [] });

    return (
        <>
            <List role="list">
                {data.map((shop) => {
                    return (
                        <ListItem key={shop._id}>
                            <Card
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
        </>
    );
}
