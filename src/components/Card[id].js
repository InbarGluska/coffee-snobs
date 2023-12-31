import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage";
import { StyledLink } from "./StyledLink";
import { SeeMoreLink } from "./Card";
import { FaLocationDot } from "react-icons/fa";

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
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 2rem;
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
    font-size: 22px;
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
                <StyledP> {location}</StyledP>
                <SeeMoreLink
                    href={mapURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Location on Google Maps
                </SeeMoreLink>
                <StyledP> {description}</StyledP>
            </Article>
        </CenteredContainer>
    );
}
