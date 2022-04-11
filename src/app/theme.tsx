import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    deepBlue: {
      light: '#194B7B',
      main: '#184A7A',
      dark: '#174070',
      contrastText: '#FFFFFF'
    }
  }
});

declare module '@mui/material/styles' {
  interface Palette {
    deepBlue: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    deepBlue?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    deepBlue: true;
  }
}
