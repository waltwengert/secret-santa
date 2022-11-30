import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

interface HeaderProps {
    children: React.ReactNode
}

export function Header (props: HeaderProps) {
    return <StyledHeader>{props.children}</StyledHeader>;
}
