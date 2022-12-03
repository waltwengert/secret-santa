import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../lib/ui/Button';
import { BaseCheckbox } from '../lib/ui/Checkbox';
import { BaseInput } from '../lib/ui/Input';
import { MOBILE_DEVICE_WIDTH } from '../lib/APP_CONST';

const InputWrapper = styled.div`
    background-color: #146b3a;
    color: white;

    display: flex;
    flex-direction: column;

    width: 100%;
    justify-content: center;

    // The below prevents text from being selectable
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const ParticipantInput = styled(BaseInput)`
    flex: 3;
`;

const EncryptedCheckbox = styled(BaseCheckbox)`
    flex: 2;
`;

const ButtonWrapper = styled.div`
    justify-content: center;
    display: flex;

    width: 100%;

    margin-top: 15px;
`;

const ButtonContainer = styled.div`
    background-color: #146b3a;
    color: white;

    display: flex;
    flex-direction: row;

    justify-content: center;

    width: 50vw;

    @media (max-width: ${MOBILE_DEVICE_WIDTH}px) {
        width: 95vw;
    }
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
                <ButtonContainer>
                    <InputButton onClick={onAdd}>Add</InputButton>
                    <InputButton onClick={onShuffle}>Shuffle</InputButton>
                    <InputButton onClick={onReveal}>Reveal All</InputButton>
                </ButtonContainer>
            </ButtonWrapper>
        </>
    );
};
