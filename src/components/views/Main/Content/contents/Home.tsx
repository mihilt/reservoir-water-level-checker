import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { ReservoirMetaData } from '../../../../../interfaces';
import { getSelectedReservoirEquipNoList } from '../../../../../utils/utils';
import DetailModal from '../../../../items/DetailModal';
import ReservoirCard from '../../../../items/ReservoirCard';

interface HomeProps {
  sortedReservoirMetaDataList: ReservoirMetaData[];
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

function Home(props: HomeProps) {
  const { sortedReservoirMetaDataList, setNavValue } = props;

  const [openModal, setOpenModal] = useState(false);
  const [modalEquipNo, setModalEquipNo] = useState<number>();

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

  const openDetailModal = (equipNo: number) => {
    setOpenModal(true);
    setModalEquipNo(equipNo);
  };

  return (
    <>
      {selectedReservoirMetaDataList.length === 0 ? (
        <Box sx={{ pt: 5, textAlign: 'center', caretColor: 'transparent' }}>
          <Box sx={{ fontSize: 18 }}>You haven't registered reservoirs yet.</Box>
          <Button
            color='deepBlue'
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
          <React.Fragment key={e.equip_no}>
            <Box sx={{ cursor: 'pointer' }}>
              <ReservoirCard
                name={e.equip_name}
                ratio={e.cr_ratio}
                equipNo={e.equip_no}
                openDetailModal={openDetailModal}
              />
            </Box>
          </React.Fragment>
        ))
      )}
      <DetailModal openModal={openModal} setOpenModal={setOpenModal} modalEquipNo={modalEquipNo} />
    </>
  );
}

export default Home;
