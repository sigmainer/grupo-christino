import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryText: string;
      secondary: string;
      secondaryText: string;

      background: string;
      text: string;

      shaddow: string;
    };

    flexboxgrid: {
      gridSize: number;
      gutterWidth: number;
      outerMargin: number;
      mediaQuery: string;
      container: {
        sm: number;
        md: number;
        lg: number;
      }
      breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      }
    }

  }
}
