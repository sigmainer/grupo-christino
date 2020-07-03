import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  title: 'light',

  colors: {
    primary: '#D87E00',
    primaryText: '#FFFFFF',
    secondary: '#B23809',
    secondaryText: '#FFFFFF',

    background: '#FDFDFD',
    text: '#333333',
    shaddow: 'rgba(50, 50, 50, .25)',
  },
  flexboxgrid: {
    // Columns quantity
    gridSize: 12,
    // Columns spacing
    gutterWidth: 1, // rem
    // Container padding
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

export default light;
