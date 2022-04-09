import { Box } from '@mui/material';
import logo from '../../assets/images/logo.png';
function Header() {
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          caretColor: 'transparent',
          textAlign: 'center',
        }}
      >
        <img
          src={logo}
          style={{ padding: '15px', cursor: 'pointer', verticalAlign: 'top' }}
          alt="logo"
        />
      </Box>
    </>
  );
}

export default Header;
