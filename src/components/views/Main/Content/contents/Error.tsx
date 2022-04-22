import { Box } from '@mui/material';

function Error() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
      <Box sx={{ fontSize: '20px', fontWeight: '700', color: 'red' }}>Error</Box>
      <Box>You received the wrong response.</Box>
    </Box>
  );
}

export default Error;
