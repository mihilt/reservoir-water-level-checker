import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

interface MainProps {
  navValue: number;
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

function Navigation(props: MainProps) {
  const { navValue, setNavValue } = props;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(event, newValue) => {
          setNavValue(newValue);
        }}>
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<SettingsIcon />} />
        <BottomNavigationAction icon={<InfoIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default Navigation;
