import styled from 'styled-components';

import { MOBILE_DEVICE_WIDTH } from '../APP_CONST';

export const BaseButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    border: none;
    border-radius: 100px;
    flex: 1;

    min-height: 40px;
    margin-right: 1vw;
    margin-left: 1vw;

    cursor: pointer;

    &: active {
        font-size: 16px;
    }

    @media (max-width: ${MOBILE_DEVICE_WIDTH}px) {
        width: 95vw;
    }

    // Media query for hover so the button doesn't look weird on touch devices
    @media (hover: hover) {
        &: hover {
            filter: brightness(0.8);
        }
    }
}
`;
