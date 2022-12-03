import styled from 'styled-components';

import { Header } from './Header';
import { UserInput } from './UserInput';

const AppWrapper = styled.div`
    background-color: #146b3a;

    min-width: 100vw;
    min-height: 100vh;

    text-align: center;
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
