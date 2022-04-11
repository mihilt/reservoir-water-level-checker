import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReservoirMetaData } from '../../../../../interfaces';
import { getSelectedReservoirEquipNoList } from '../../../../../utils/utils';

interface HomeProps {
  sortedReservoirMetaDataList: ReservoirMetaData[];
}

function Home(props: HomeProps) {
  const { sortedReservoirMetaDataList } = props;

  const [selectedReservoirMetaDataList, setSelectedReservoirMetaDataList] =
    useState<ReservoirMetaData[]>([]);

  useEffect((): void => {
    const selectedReservoirEquipNoList = getSelectedReservoirEquipNoList();
    const result = sortedReservoirMetaDataList.filter(
      (e) => selectedReservoirEquipNoList.indexOf(e.equip_no) !== -1
    );
    setSelectedReservoirMetaDataList(result);
  }, [sortedReservoirMetaDataList]);

  return (
    <>
      {selectedReservoirMetaDataList.length === 0 ? (
        <Box sx={{ pt: 5, textAlign: 'center' }}>없음</Box>
      ) : (
        selectedReservoirMetaDataList.map((e) => (
          <div key={e.equip_no}>
            {e.equip_name} : {e.cr_ratio}
          </div>
        ))
      )}
    </>
  );
}

export default Home;
