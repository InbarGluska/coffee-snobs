import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage";

const Article = styled.article`
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    max-width: 600px;
    margin: 2rem;
    width: 360px;
    height: 520px;
    position: relative;
    padding: 20px;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
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
    font-size: 22px;
    font-weight: bold;
`;

const Location = styled.p`
    font-weight: bold;
`;

export const SeeMoreLink = styled.a`
    display: block;
    background-color: #a47e3b;
    color: #ffffff;
    padding: 2px 16px;
    border-radius: 15px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: 35%;
    margin: auto;
    padding: 5px;

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
            <Location> {location}</Location>
            {/* <p>mapURL: {mapURL}</p>
            <p>description: {description}</p> */}
            <SeeMoreLink href={`coffeeshops/${id}`}>More Details</SeeMoreLink>
        </Article>
    );
}
