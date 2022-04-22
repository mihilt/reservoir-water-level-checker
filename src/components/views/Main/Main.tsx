import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Content from './Content/Content';
import { useEffect } from 'react';
import { getReservoirMetaDataList } from '../../../utils/api';
import { ReservoirMetaData } from '../../../interfaces';

interface MainProps {
  navValue: number;
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

function Main(props: MainProps) {
  const { navValue, setNavValue } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [sortedReservoirMetaDataList, setSortedReservoirMetaDataList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async function (): Promise<void> {
      setIsLoading(true);
      let reservoirMetaDataList;
      try {
        reservoirMetaDataList = await getReservoirMetaDataList();
      } catch (e) {
        console.log(`ERROR: ${e}`);
        setIsLoading(false);
        setIsError(true);
        return;
      }
      setIsLoading(false);
      setSortedReservoirMetaDataList(
        reservoirMetaDataList.data.sort((a: ReservoirMetaData, b: ReservoirMetaData) =>
          a.equip_name > b.equip_name ? 1 : -1
        )
      );
    })();
  }, []);

  return (
    <>
      <Box sx={{ py: 8, px: 2 }}>
        {navValue !== 2 && isLoading ? (
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            <CircularProgress sx={{ color: '#184A7A' }} />
          </Box>
        ) : (
          <Content
            navValue={navValue}
            setNavValue={setNavValue}
            sortedReservoirMetaDataList={sortedReservoirMetaDataList}
            isError={isError}
          />
        )}
      </Box>
    </>
  );
}

export default Main;
