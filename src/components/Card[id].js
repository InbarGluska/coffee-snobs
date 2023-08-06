import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage";
import { StyledLink } from "./StyledLink";
import { SeeMoreLink } from "./Card";

const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Article = styled.article`
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    max-width: 600px;
    margin: 2rem;
    width: 800px;
    height: 800px;
    position: relative;
    padding: 20px;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const Figure = styled.figure`
    margin: 0;
`;

const Figcaption = styled.figcaption`
    font-weight: bold;
`;

const StyledP = styled.p`
    font-weight: bold;
`;

const StyledLocationLink = styled(StyledLink)`
    text-align: center;
    background-color: #a47e3b;

    &:hover {
        background-color: #61481c;
    }
`;

export default function Card({
    id,
    name,
    location,
    image,
    mapURL,
    description,
}) {
    return (
        <CenteredContainer>
            <Article>
                <Figure>
                    <ImageContainer>
                        <StyledImage
                            src={image}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt=""
                        />
                    </ImageContainer>
                    <Figcaption>{name}</Figcaption>
                </Figure>
                <StyledP>Location: {location}</StyledP>
                <SeeMoreLink
                    href={mapURL}
                    target="_blank" // This will open the link in a new tab
                    rel="noopener noreferrer" // For security reasons when using target="_blank"
                >
                    Location on Google Maps
                </SeeMoreLink>
                {/* <StyledP>mapURL: {mapURL}</StyledP> */}
                <StyledP>description: {description}</StyledP>
            </Article>
        </CenteredContainer>
    );
}
