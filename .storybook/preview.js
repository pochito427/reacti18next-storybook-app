/** @type { import('@storybook/react').Preview } */
import 'minireset.css'
import '../styles/global.css'
import '../styles/tokens.css'

import i18n from './i18next';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
  background: "white",
  padding: "20px"
}

// Wrap your stories in the I18nextProvider component
const withI18next = (Story) => {
  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <div style={styles}>
          <Story />
        </div>
      </I18nextProvider>
    </Suspense>
  );
};

// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];

const preview = {
  globals: {
    locale: "en",
    locales: {
        en: {title: "English", left: '🇺🇸'},
        es: {title: "Español", left: 'CO'},
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
};

export default preview;
