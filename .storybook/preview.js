// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import React from 'react';
import { getGlobalStyleSheet } from '../src/styles/globalStyle';
import { addDecorator, addParameters } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';


// addDecorator(s => <><GlobalStyle />{s()}</>);
addDecorator(story => {
  const styleSheet = getGlobalStyleSheet('light');
  const GlobalStyle = createGlobalStyle` ${styleSheet}`;
  console.log('globalStyle', GlobalStyle);

  return (
    <>
      <GlobalStyle />
      {story()}
    </>
  );
});

// addParameters({
//   options: {
//     theme: alloyTheme,
//   },
// });

