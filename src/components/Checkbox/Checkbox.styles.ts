import styled from 'styled-components';
import { math } from 'polished';

import { css } from 'styled-components';

const checkboxSize = props => props.theme.form.checkboxSize[props.fieldSize];

const checkSize = 0.8;

const disabledStyle = css`
    label {
        cursor: not-allowed;
        color: var(--cl-gray-400);

        &::before {
            border-color: var(--cl-gray-700);
            background-color: white;
        }
    }

    input {
        &:checked {
            & + label {
                &::before {
                    border-color: var(--cl-gray-700);
                    background-color: white;
                }
            }
        }
    }
`;

const basicStyle = css`
    label {
        cursor: pointer;
    }

    input {
        &:hover,
        &:active,
        &:focus {
            & + label {
                & > .icon {
                    transform: scale(${checkSize * 0.75});
                }
            }
        }

        &:checked {
            & + label {
                & > .icon {
                    transform: scale(${checkSize});
                }
            }
        }
    }
`;


const CheckboxBase = styled.div`
    position: relative;
    display: flex; /* avoid 100% large label (for hover) */
    margin: 0.2rem 0;

    label {
        position: relative;
        display: flex;
        line-height: ${checkboxSize};
        font-size: var(--cl-font-size-200);
        color: $var(--cl-gray-600);
        transition: all 1s ease-out;

        &::before {
            content: '';
            flex-shrink: 0;
            height: ${checkboxSize};
            width: ${checkboxSize};
            margin-right: 0.75rem;
            border-radius: 0.25rem;
            border: solid 2px;
            border-color: $var(--cl-gray-300);
            background-color: white;
            transition: all 1s ease out;
        }

        & > .icon {
            position: absolute;
            left: 0;
            top: 0;
            height: ${checkboxSize};
            width: ${checkboxSize};
            transform: scale(0);

            svg {
                fill: $var(--cl-gray-300);
            }
        }
    }

    input {
        position: absolute;
        transform: translate(-50%, -100%);
        top: ${checkboxSize};
        left: ${props => math(checkboxSize(props) + '/2')};

        &:checked {
            & + label {
                font-weight: 400

                &::before {
                    border-color: $var(--cl-gray-600);
                    background-color: $var(--cl-background-success);
                }

                & > .icon {
                    transform: scale(${checkSize});

                    svg {
                        fill: white;
                    }
                }
            }
        }
    }
`;

export { CheckboxBase };
