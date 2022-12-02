import styled from 'styled-components';
import { Label } from '../lib/ui/Label';

const HeaderWrapper = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const HeaderTitle = () => {
    return <Label>Secret Santa</Label>;
};

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle />
        </HeaderWrapper>
    );
};
