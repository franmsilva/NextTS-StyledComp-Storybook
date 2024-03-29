import * as NextImage from 'next/image';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globals';
import { breakpoints } from '../src/styles/mediaQueries';
import { Theme } from '../src/styles/theme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: {
      width: breakpoints.mobileS,
      height: '568px',
    },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: {
      width: breakpoints.mobileM,
      height: '667px',
    },
  },
  mobileLarge: {
    name: 'Mobile Large',
    styles: {
      width: breakpoints.mobileL,
      height: '926px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: breakpoints.tablet,
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: breakpoints.laptop,
      height: '1366px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
