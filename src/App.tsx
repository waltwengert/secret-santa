import styled from 'styled-components';
import { Header } from './Header';
import { UserInput } from './UserInput';

const AppWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    text-align: center;
    background-color: #146b3a;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <UserInput />
        </AppWrapper>
    );
};

export default App;
