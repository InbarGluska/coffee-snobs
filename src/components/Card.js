import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage";

const Article = styled.article`
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    max-width: 400px;
    margin: 1rem;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 200px;
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

const Location = styled.p`
    font-weight: bold;
`;

const SeeMoreLink = styled.a`
    display: block;
    background-color: #a47e3b;
    color: #ffffff;
    padding: 2px 16px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;

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
            <Location>Location: {location}</Location>
            {/* <p>mapURL: {mapURL}</p> */}
            {/* <p>description: {description}</p> */}
            {/* <Link href={`shops/${id}`} passHref>
                <SeeMoreLink>See more details</SeeMoreLink>
            </Link> */}
            <SeeMoreLink href={`shops/${id}`}>See more details</SeeMoreLink>
        </Article>
    );
}
