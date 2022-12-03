import styled from 'styled-components';

export const BaseButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    border: none;
    border-radius: 100px;
    flex: 1;

    min-height: 40px;
    margin-right: 1vw;
    margin-left: 1vw;

    cursor: pointer;

    &: hover {
        filter: brightness(0.8);
    }

    &: active {
        font-size: 16px;
    }
`;
