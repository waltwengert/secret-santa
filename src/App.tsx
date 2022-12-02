import styled from 'styled-components';
import { Header } from './header/Header';

const StyledApp = styled.div`
    text-align: center;
`;

const App = () => {
    return (
        <StyledApp>
            <Header />
        </StyledApp>
    );
};

export default App;
