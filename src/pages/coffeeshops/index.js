import styled from "styled-components";
import Card from "@/components/Card.js";
// import useSWR from "swr";
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

export default function coffeeShops() {
    //   const { data } = useSWR("/api/places", { fallbackData: [] });

    // Placeholder data for the Card component
    const placeholderCardData = {
        name: "Bonanza Roasters",
        image: "https://www.ignant.com/wp-content/uploads/2019/06/ignant-travel-bonanza-coffee-001-1-1440x960.jpg",
        location: "Adalbertstraße 70, 10999 Berlin",
        id: "123",
    };

    return (
        <>
            <List role="list">
                {/* 
        Remove or comment out the data.map section for now
        {data.map((place) => {
          return (
            <ListItem key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </ListItem>
          );
        })}
        */}
                <ListItem>
                    {/* Render the Card component with placeholder data */}
                    <Card
                        name={placeholderCardData.name}
                        image={placeholderCardData.image}
                        location={placeholderCardData.location}
                        id={placeholderCardData.id}
                    />
                </ListItem>
            </List>
            <Link href="/shop" passHref legacyBehavior>
                {/* Add the content for the link */}
                <StyledLink>Visit Shop</StyledLink>
            </Link>
        </>
    );
}
