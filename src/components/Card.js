import Link from "next/link.js";
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

const Anchor = styled.a`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;

    ${ImageContainer}:hover & {
        opacity: 1;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const ScreenReaderOnly = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

export default function Card({
    // _id,
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
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        alt=""
                    />
                </ImageContainer>
                <figcaption>{name}</figcaption>
            </Figure>
            <p>Location: {location}</p>
            <p>mapURL: {mapURL}</p>
            <p>description: {description}</p>
            <Link href={`/coffeeshop-details/${mapURL}`} passHref>
                <div>See more details</div>
            </Link>
        </Article>
    );
}
