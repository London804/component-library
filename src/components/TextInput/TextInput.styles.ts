// TextField.style

import styled, { keyframes } from 'styled-components';
import Box from '../Box';
// import { InputItemFocus } from '../../helpers/mixins/focus';
// import { Icon } from '../Icon';

export const StyledInput = styled.input<{
    disabled?: boolean;
    error?: boolean;
    leadingIcon?: boolean;
    trailingIcon?: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: var(--cl-space-7);
  padding: 0 var(--cl-space-2);
  background-color: white;
  color: black;
  border-radius: var(--cl-radius-2);
  border: 1px solid black;
  font-size: var(--cl-font-size-2);
  line-height: var(--cl-line-height-2);
  font-family: var(--cl-font-family-default);

  ${p =>
        p.leadingIcon
            ? `
      padding-left: var(--cl-space-6);
      `
            : null}

  ${p =>
        p.trailingIcon
            ? `
      padding-right: var(--cl-space-6);
      `
            : null}

  ::placeholder {
    color: var(--cl-text-muted);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--cl-background-disabled);
  }



  ${p =>
        p.error
            ? `
      border: 1px solid var(--cl-border-error);
  `
            : null}
`;

// To-do: make this optional for users who don't have prefered reduced motion on.
const errorSlideOut = keyframes`
from {
  transform: translate(0,  calc(var(--cl-space-5) * -1) );
  opacity:0;
  max-height: 0;
}

to {
  transform: translate(0px);
  opacity:1;
  max-height: - var(--cl-space-5);
}
`;

export const ErrorSlot = styled(Box)`
  color: var(--cl-border-error);
  font-size: var(--cl-font-size-2);
  animation: ${errorSlideOut} 150ms ease;
`;

export const HelpSlot = styled(Box)`
  color: var(--cl-text-muted);
  font-size: var(--cl-font-size-2);
`;

export const OptionalSlot = styled(Box)`
  color: var(--cl-text-muted);
  font-size: var(--cl-font-size-2);
  font-style: italic;
`;

// export const StyledIcon = styled(Icon) <{ leading: boolean }>`
//   position: absolute;
//   top: 50%;
//   ${p =>
//         p.leading
//             ? `
//       left: var(--cl-space-2);
//   `
//             : `right: var(--cl-space-2);`}
//   transform: translateY(-50%);
//   z-index: 1;
// `;

