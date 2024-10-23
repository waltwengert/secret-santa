import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import App from '../App';

const StyledResults = styled.p`
    padding: 10px;
    font-size: 26px;
`;

interface DecrypterParams {
    decryptionText?: string
}

export function loader({ params }: { params: DecrypterParams }) {
    const decryptionText = params.decryptionText;
    return { decryptionText };
}

export const Decrypter = () => {
    const data = useLoaderData() as DecrypterParams;

    return (
        <App>
            <StyledResults>You have: {data.decryptionText}</StyledResults>
        </App>
    );
};
