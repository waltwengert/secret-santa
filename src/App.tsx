import styled from 'styled-components';
import { Header } from './header/Header';
import { Title } from './header/Title';

const StyledApp = styled.div`
    text-align: center;
`;

function App() {
    return (
        <StyledApp>
            <Header>
                <Title />
            </Header>
        </StyledApp>
    );
}

export default App;
