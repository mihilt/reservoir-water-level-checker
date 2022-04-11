import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReservoirMetaData } from '../../../../../interfaces';
import { getSelectedReservoirEquipNoList } from '../../../../../utils/utils';
import ReservoirCard from '../../../../items/ReservoirCard';

interface HomeProps {
  sortedReservoirMetaDataList: ReservoirMetaData[];
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

function Home(props: HomeProps) {
  const { sortedReservoirMetaDataList, setNavValue } = props;

  const [selectedReservoirMetaDataList, setSelectedReservoirMetaDataList] = useState<
    ReservoirMetaData[]
  >([]);

  useEffect((): void => {
    const selectedReservoirEquipNoList = getSelectedReservoirEquipNoList();
    const result = sortedReservoirMetaDataList.filter(
      (e) => selectedReservoirEquipNoList.indexOf(e.equip_no) !== -1
    );
    setSelectedReservoirMetaDataList(result);
  }, [sortedReservoirMetaDataList]);

  const clickRegister = () => {
    setNavValue(1);
  };

  return (
    <>
      {selectedReservoirMetaDataList.length === 0 ? (
        <Box sx={{ pt: 5, textAlign: 'center', caretColor: 'transparent' }}>
          <Box sx={{ fontSize: 18 }}>You haven't registered reservoirs yet.</Box>
          <Button
            variant='contained'
            sx={{
              fontSize: 15,
              my: 2,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={clickRegister}>
            Click Here to Register
          </Button>
        </Box>
      ) : (
        selectedReservoirMetaDataList.map((e) => (
          <ReservoirCard key={e.equip_no} name={e.equip_name} ratio={e.cr_ratio} />
        ))
      )}
    </>
  );
}

export default Home;
