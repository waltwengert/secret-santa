import styled from 'styled-components';
import { BaseButton } from './lib/ui/Button';
import { Input } from './lib/ui/Input';
import { Label } from './lib/ui/Label';

const InputWrapper = styled.div`
    background-color: #146b3a;
    color: white;

    display: flex;
    flex-direction: row;

    width: 50%;
    justify-content: center;
`;

const InputLabel = styled(Label)`
    flex: 3;
    font-size: calc(10px + 2vmin);
`;

const ParticipantInput = styled(Input)`
    flex: 3;
`;

const EnterParticipant = styled(BaseButton)`
    flex: 1;
`;

export const UserInput = () => {
    return (
        <InputWrapper>
            <InputLabel>Enter a name:</InputLabel>
            <ParticipantInput />
            <EnterParticipant>Enter</EnterParticipant>
        </InputWrapper>
    );
};
