import styled from "styled-components";
import { StyledLink } from "@/components/StyledLink";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://publiccoffeeroasters.com/wp-content/uploads/2021/06/PCR_Latteart_Argin_Quadratisch-1024x1024.jpg");
    background-size: cover;
    background-position: center 20%;
`;

const Quote = styled.p`
    font-size: 24px;
    font-style: italic;
    margin-top: 1rem;
    border-left: 3px solid #a47e3b;
    padding-left: 1rem;
    color: #333;
    position: relative;
    background-image: linear-gradient(to right, #f9f9f9, #fff);
    margin-bottom: 4rem;

    &:before {
        content: '"';
        font-size: 40px;
        font-family: Arial, sans-serif;
        position: absolute;
        top: -5px;
        left: -15px;
        color: #a47e3b;
    }
`;

export default function Home() {
    return (
        <HomeContainer>
            <Quote>
                “Coffee is a lot more than just a drink; it’s something
                happening.” - Gertrude Stein
            </Quote>
            <StyledLink href="/coffeeshops">Coffee Shops</StyledLink>
            <StyledLink href="/favorites">My Favorites</StyledLink>
            <StyledLink href="/baristajobs">Barista Jobs</StyledLink>
        </HomeContainer>
    );
}
