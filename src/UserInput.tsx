import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BaseButton } from './lib/ui/Button';
import { BaseCheckbox } from './lib/ui/Checkbox';
import { BaseInput } from './lib/ui/Input';

const InputWrapper = styled.div`
    background-color: #146b3a;
    color: white;

    display: flex;
    flex-direction: column;

    width: 100%;
    justify-content: center;
`;

const ParticipantInput = styled(BaseInput)`
    flex: 3;
`;

const EncryptedCheckbox = styled(BaseCheckbox)`
    flex: 2;
`;

const ButtonWrapper = styled.div`
    background-color: #146b3a;
    color: white;

    display: flex;
    flex-direction: row;

    width: 100%;
    justify-content: center;
`;

const InputButton = styled(BaseButton)`
    background-color: #bb2528;
`;

export const UserInput = () => {
    const [encrypted, setEncrypted] = useState(false);

    const onToggleEncrypted = () => {
        setEncrypted(!encrypted);
    };

    useEffect(() => {
        console.debug('Toggle encrypted to: ', encrypted);
    }, [encrypted]);

    const onAdd = () => {
        console.debug('Add');
    };

    const onShuffle = () => {
        console.debug('Shuffle');
    };

    const onReveal = () => {
        console.debug('Reveal All');
    };

    return (
        <>
            <InputWrapper>
                <ParticipantInput placeholder="Name" autoFocus={true} />
                <EncryptedCheckbox
                    labelText="Encrypted?"
                    onChange={onToggleEncrypted}
                />
            </InputWrapper>
            <ButtonWrapper>
                <InputButton onClick={onAdd}>Add</InputButton>
                <InputButton onClick={onShuffle}>Shuffle</InputButton>
                <InputButton onClick={onReveal}>Reveal All</InputButton>
            </ButtonWrapper>
        </>
    );
};
