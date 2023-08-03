import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";
import { StyledImage } from "../../../components/StyledImage.js";
import Card from "../../../components/Card.js";

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
            <ListItem key={shop._id}>
                <Card
                    name={shop.name}
                    location={shop.location}
                    image={shop.image}
                    mapURL={shop.mapURL}
                    description={shop.description}
                />
            </ListItem>
        </>
    );
}
