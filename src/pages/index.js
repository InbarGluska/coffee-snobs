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
                "Even bad coffee is better than no coffee at all." - David Lynch
            </Quote>
            <StyledLink href="/coffeeshops">Coffee Shops</StyledLink>
            <StyledLink href="/articles">My Favorites</StyledLink>
            <StyledLink href="/baristajobs">Barista Jobs</StyledLink>
        </HomeContainer>
    );
}
