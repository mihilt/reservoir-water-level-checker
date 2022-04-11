import { BottomNavigation, BottomNavigationAction } from '@mui/material';
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
  );
}

export default Navigation;
