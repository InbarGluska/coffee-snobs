import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #a47e3b;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #61481c;
    }
`;

export default function Home() {
    const router = useRouter();

    return (
        <HomeContainer>
            <Link href="/coffeeshops" passHref>
                <Button>Coffee Shops</Button>
            </Link>
            <Link href="/baristajobs" passHref>
                <Button>Barista Jobs</Button>
            </Link>
            <Link href="/articles" passHref>
                <Button>Articles</Button>
            </Link>
        </HomeContainer>
    );
}
