import { useState } from 'react';
import { Box, CircularProgress, Paper } from '@mui/material';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import { useEffect } from 'react';
import { getReservoirMetaDataList } from '../../../utils/api';
import { ReservoirMetaData } from '../../../interfaces';

function Main() {
  const [navValue, setNavValue] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [sortedReservoirMetaDataList, setSortedReservoirMetaDataList] = useState([]);

  useEffect(() => {
    (async function (): Promise<void> {
      setIsLoading(true);
      const reservoirMetaDataList = await getReservoirMetaDataList();
      setIsLoading(false);
      setSortedReservoirMetaDataList(
        reservoirMetaDataList.data.sort((a: ReservoirMetaData, b: ReservoirMetaData) =>
          a.equip_name > b.equip_name ? 1 : -1
        )
      );
    })();
  }, []);

  return (
    <Box sx={{ py: 8, px: 2 }}>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', pt: 35 }}>
          <CircularProgress sx={{ color: '#184A7A' }} />
        </Box>
      ) : (
        <Content
          navValue={navValue}
          setNavValue={setNavValue}
          sortedReservoirMetaDataList={sortedReservoirMetaDataList}
        />
      )}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Navigation navValue={navValue} setNavValue={setNavValue} />
      </Paper>
    </Box>
  );
}

export default Main;
