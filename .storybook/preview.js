/** @type { import('@storybook/react').Preview } */
import 'minireset.css'
import '../styles/global.css'
import '../styles/tokens.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
