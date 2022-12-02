import styled from 'styled-components';
import { Header } from './header/Header';
import { UserInput } from './input/UserInput';

const StyledApp = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const App = () => {
    return (
        <StyledApp>
            <Header />
            <UserInput />
        </StyledApp>
    );
};

export default App;
