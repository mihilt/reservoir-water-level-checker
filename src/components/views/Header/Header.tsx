import { Box } from '@mui/material';

function Header() {
  const clickHeader = () => {
    window.location.href = '/water-reserve-rate-viewer';
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        zIndex: 2147483647
      }}
      onClick={clickHeader}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: '#EEEEEE',
          caretColor: 'transparent',
          textAlign: 'center'
        }}>
        <img
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          style={{
            height: '55px',
            padding: '5px',
            verticalAlign: 'top'
          }}
          alt='logo'
        />
      </Box>
    </Box>
  );
}

export default Header;
