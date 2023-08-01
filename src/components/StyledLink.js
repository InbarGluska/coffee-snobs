import styled from "styled-components";

export const StyledLink = styled.a`
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
