import styled from 'styled-components';

import { MOBILE_DEVICE_WIDTH } from '../lib/APP_CONST';

const ResultsContainer = styled.div`
    flex: 1 1 auto;

    background-color: #165b33;
    overflow: auto;

    margin: 20px auto 40px;

    width: 50vw;

    @media (max-width: ${MOBILE_DEVICE_WIDTH}px) {
        width: 90vw;
    }
`;

const NamesContainer = styled.div`
    width: 50%;
    display: inline-block;
`;

const Name = styled.p`
    padding: 10px;
`;

interface ResultsProps {
    nameList: string[]
    shuffledNameList: string[]
    revealed: boolean
}

export const Results = ({
    nameList,
    shuffledNameList,
    revealed
}: ResultsProps) => {
    const names = nameList.map(name => (
        <Name key={`name-${name}`}>{name}</Name>
    ));
    const shuffledNames = shuffledNameList.map(name => (
        <Name key={`name-${name}`} hidden={!revealed}>
            {name}
        </Name>
    ));

    return (
        <ResultsContainer>
            <NamesContainer>{names}</NamesContainer>
            <NamesContainer>{shuffledNames}</NamesContainer>
        </ResultsContainer>
    );
};
