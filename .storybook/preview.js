/** @type { import('@storybook/react').Preview } */
import 'minireset.css'
import '../styles/global.css'
import '../styles/tokens.css'

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

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  )
]

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
