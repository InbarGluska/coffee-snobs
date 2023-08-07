import React from "react";
import styled from "styled-components";
import { AiOutlineRead, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { PiCoffee } from "react-icons/pi";
import { BsBriefcase } from "react-icons/bs";

const NavbarContainer = styled.nav`
    background-color: white;
    padding: 0.3rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    border-top: 2px solid #808080;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
`;

const ListItem = styled.li`
    margin-right: 1rem;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #361500;
    font-weight: bold;
    font-size: 35px;
    margin-right: 4rem;
    margin-left: 2rem;
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <List>
                <ListItem>
                    <NavLink href="/">
                        <AiOutlineHome />
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink href="/coffeeshops">
                        <PiCoffee />
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink href="/favorites">
                        <AiOutlineHeart />
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink href="/baristajobs">
                        <BsBriefcase />
                    </NavLink>
                </ListItem>
                {/* <ListItem>
                    <NavLink href="/articles">
                        <AiOutlineRead />
                    </NavLink>
                </ListItem> */}
            </List>
        </NavbarContainer>
    );
}
