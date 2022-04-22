import { CssBaseline, ThemeProvider } from '@mui/material';
import Main from './components/views/Main/Main';
import Header from './components/views/Header/Header';
import theme from './app/theme';
import Navigation from './components/views/Navigation/Navigation';
import { useState } from 'react';

function App() {
  const [navValue, setNavValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main navValue={navValue} setNavValue={setNavValue} />
      <Navigation navValue={navValue} setNavValue={setNavValue} />
    </ThemeProvider>
  );
}

export default App;
