import styled from 'styled-components';
import { useEffect } from 'react';

import { MOBILE_DEVICE_WIDTH } from '../lib/APP_CONST';

export const ResultsContainer = styled.div`
    flex: 1 1 auto;

    background-color: #165b33;
    overflow: auto;

    margin: 20px auto 40px;

    width: 50vw;

    @media (max-width: ${MOBILE_DEVICE_WIDTH}px) {
        width: 90vw;
    }
`;

interface ResultsProps {
    nameList: string[]
    isEncrypted: boolean
}

export const Results = ({ nameList, isEncrypted }: ResultsProps) => {
    useEffect(() => {
        console.debug('Name list: ', nameList);
        console.debug('Encrypted: ', isEncrypted);
    }, [nameList, isEncrypted]);

    return <ResultsContainer />;
};
