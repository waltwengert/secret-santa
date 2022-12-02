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

export const Title = () => {
    return <p>Secret Santa</p>;
};

export const Header = () => {
    return (
        <StyledHeader>
            <Title />
        </StyledHeader>
    );
};
