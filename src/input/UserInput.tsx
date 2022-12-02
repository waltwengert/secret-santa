import styled from 'styled-components';
import { Button } from '../lib/ui/Button';
import { Input } from '../lib/ui/Input';
import { Label } from '../lib/ui/Label';

const InputWrapper = styled.div`
    background-color: #282c34;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    display: flex;
    flex-direction: row;
`;

export const InputLabel = () => {
    return <Label>Enter A Name:</Label>;
};

export const ParticipantInput = () => {
    return <Input />;
};

const EnterParticipant = () => {
    return <Button />;
};

export const UserInput = () => {
    return (
        <InputWrapper>
            <InputLabel />
            <ParticipantInput />
            <EnterParticipant />
        </InputWrapper>
    );
};
