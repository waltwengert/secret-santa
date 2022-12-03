import styled from 'styled-components';

export const StyledInput = styled.input`
    color: #ffffff;

    font-size: 18px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    margin-bottom: 10px;
    margin-top: 30px;

    display: block;
    width: 40vw;
    margin-right: auto;
    margin-left: auto;
`;

interface InputProps {
    placeholder?: string
    type?: string
    autoFocus?: boolean
}

export const BaseInput = ({ placeholder, type, autoFocus }: InputProps) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            autoFocus={autoFocus}
        />
    );
};
