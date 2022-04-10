import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';

function Main() {
  const [navValue, setNavValue] = useState(0);

  return (
    <Box sx={{ py: 7.5, px: 1 }}>
      <Content navValue={navValue} />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Navigation navValue={navValue} setNavValue={setNavValue} />
      </Paper>
    </Box>
  );
}

export default Main;
