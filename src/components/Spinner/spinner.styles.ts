import styled from 'styled-components';
import { themeType, theme } from '../../styles/themes';
import { ComponentSize } from '../../styles/sizes';

interface StyledSpinnerProps {
    innerType: themeType;
    size: ComponentSize;
}

// Real tag is assigned dynamically
export const StyledSpinner = styled.span<StyledSpinnerProps>`
  box-sizing: border-box;
  display: block;
  border: 6.6px solid transparent;
  border-top: 6px solid
    ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
  border-right: 6.6px solid
    ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
  border-bottom: 6.6px solid
    ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.spinner--small {
    width: 32px;
    height: 32px;
    border-top: 6.4px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
    border-right: 6.4px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
    border-bottom: 6.4px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
  }

  &.spinner--large {
    width: 100px;
    height: 100px;
    border-top: 10px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
    border-right: 10px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
    border-bottom: 10px solid
      ${(pr) =>
        pr.innerType === 'light' ? '#d4d4d4' : theme[pr.innerType].hover};
  }
`;
