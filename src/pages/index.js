import styled from "styled-components";
import Link from "next/link";
import { StyledLink } from "@/components/StyledLink";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://publiccoffeeroasters.com/wp-content/uploads/2021/06/PCR_Latteart_Argin_Quadratisch-1024x1024.jpg");
    background-size: cover;
`;

export default function Home() {
    return (
        <HomeContainer>
            <StyledLink href="/coffeeshops">Coffee Shops</StyledLink>
            <StyledLink href="/baristajobs">Barista Jobs</StyledLink>
            <StyledLink href="/articles">Articles</StyledLink>
        </HomeContainer>
    );
}
