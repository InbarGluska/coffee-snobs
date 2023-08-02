import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";
import { StyledButton } from "../../../components/StyledButton.js";
import { StyledImage } from "../../../components/StyledImage.js";

const ImageContainer = styled.div`
    position: relative;
    height: 15rem;
`;

const ButtonContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 0.2rem;

    & > * {
        flex-grow: 1;
        text-align: center;
    }
`;

const StyledLocationLink = styled(StyledLink)`
    text-align: center;
    background-color: white;
    border: 3px solid lightsalmon;
`;

export default function DetailsPage() {
    const router = useRouter();
    const { isReady } = router;
    const { push } = router;
    const { id } = router.query;

    const { data: shop, isLoading, error } = useSWR(`/api/shops/${id}`);

    if (!isReady || isLoading || error) return <h2>Loading...</h2>;

    return (
        <>
            <Link href={"/coffeeshops"} passHref legacyBehavior>
                <StyledLink justifySelf="start">back</StyledLink>
            </Link>
            <ImageContainer>
                <StyledImage
                    src={shop.image}
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    alt=""
                />
            </ImageContainer>
            <h2>
                {shop.name}, {shop.location}
            </h2>
            <Link href={shop.mapURL} passHref legacyBehavior>
                <StyledLocationLink>Location on Google Maps</StyledLocationLink>
            </Link>
            <p>{shop.description}</p>
        </>
    );
}
