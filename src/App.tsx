import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Main from './components/views/Main/Main';
import Header from './components/views/Header/Header';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
