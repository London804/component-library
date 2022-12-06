import styled from 'styled-components';
import { theme as typeColors } from '../../styles/themes';
import { spinnerWidth } from './spinner.constants';
// Real tag is assigned dynamically
export const StyledSpinner = styled.span `
  box-sizing: border-box;
  display: block;
  border: ${(pr) => spinnerWidth(pr.size)}px solid transparent;
  border-top: ${(pr) => spinnerWidth(pr.size)}px solid
    ${(pr) => pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover};
  border-right: ${(pr) => spinnerWidth(pr.size)}px solid
    ${(pr) => pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover};
  border-bottom: ${(pr) => spinnerWidth(pr.size)}px solid
    ${(pr) => pr.innerType === 'light' ? '#d4d4d4' : typeColors[pr.innerType].hover};
  border-radius: 50%;
  width: ${(pr) => pr.size}px;
  height: ${(pr) => pr.size}px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
//# sourceMappingURL=spinner.styles.js.map