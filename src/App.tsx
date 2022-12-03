import styled from 'styled-components';

import { Header } from './components/Header';
import { Results } from './components/Results';
import { UserInput } from './components/UserInput';

const AppWrapper = styled.div`
    background-color: #146b3a;

    min-width: 100vw;
    min-height: 100vh;

    text-align: center;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <UserInput />
            <Results />
        </AppWrapper>
    );
};

export default App;
