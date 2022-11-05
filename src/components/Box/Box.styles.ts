import styled from 'styled-components';

export const StyledBox = styled.div<{
    alignItems?: string;
    justifyContent?: string;
    direction?: string;
    gap?: number;
    wrap?: string;
}>`
  display: flex;
  align-items: ${p => (p.alignItems ? p.alignItems : 'center')};
  justify-content: ${p => (p.justifyContent ? p.justifyContent : 'center')};
  flex-direction: ${p => (p.direction ? p.direction : 'row')};
  flex-wrap: ${p => (p.wrap ? p.wrap : 'wrap')};
  width: 100%;
  ${p => {
        switch (p.gap) {
            case 2:
                return `
                gap: var(--cl-space-2);
                `;
            case 3:
                return `
                gap: var(--cl-space-3);
                `;
            case 4:
                return `
                gap: var(--cl-space-4);
                `;
            case 5:
                return `
                gap: var(--cl-space-5);
                `;
            case 6:
                return `
                gap: var(--cl-space-6);
                `;
            case 7:
                return `
                gap: var(--cl-space-7);
                `;
            case 8:
                return `
                gap: var(--cl-space-8);
                `;
            case 9:
                return `
                gap: var(--cl-space-9);
                `;
            default:
                return `
                gap: var(--cl-space-1);
                `;
        }
    }}

  ::-webkit-scrollbar {
    width: var(--cl-space-5);
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--cl-background-secondary);
    border-radius: 40px;
    border: var(--cl-space-2) solid white;
  }
`;
