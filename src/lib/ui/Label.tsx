import styled from 'styled-components';

const StyledP = styled.p`
    margin: 0;
`;

interface LabelProps {
    children: any
}

export const BaseLabel = ({ children }: LabelProps) => {
    return <StyledP>{children}</StyledP>;
};
