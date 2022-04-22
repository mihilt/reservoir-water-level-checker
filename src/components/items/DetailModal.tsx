import { Backdrop, Box, Fade, Modal, Typography, CircularProgress, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from 'react';
import { getReservoirData } from '../../utils/api';
import { ReservoirData } from '../../interfaces';

interface DetailModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalEquipNo: number | undefined;
}

function DetailModal(props: DetailModalProps) {
  const { openModal, setOpenModal, modalEquipNo } = props;

  const [reservoirData, setReservoirData] = useState<ReservoirData>();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setOpenModal(false);

  useEffect((): void => {
    setIsLoading(true);
    (async () => {
      if (modalEquipNo === undefined) {
        return;
      }
      const reservoirDataResult = await getReservoirData(modalEquipNo);
      setReservoirData(reservoirDataResult.data[0]);
      setIsLoading(false);
    })();
  }, [modalEquipNo]);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Fade in={openModal}>
          <Paper
            sx={{
              width: '300px',
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: 24,
              p: 4
            }}>
            <CloseIcon
              sx={{ cursor: 'pointer', position: 'absolute', top: '15px', right: '15px' }}
              onClick={handleClose}
            />
            {isLoading ? (
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress sx={{ my: 10 }} />
              </Box>
            ) : (
              <>
                <Typography sx={{ textAlign: 'center' }} variant='h6' component='h2'>
                  {reservoirData?.equip_name}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  소재지 - {reservoirData?.equip_addr1} {reservoirData?.equip_addr2}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  관할지사 - {reservoirData?.buseo_head_name} {reservoirData?.buseo_branch_name}
                </Typography>
                <Typography sx={{ mt: 2 }}>금일 저수율 - {reservoirData?.now_rate}%</Typography>
                <Typography sx={{ mt: 2 }}>전일 저수율 - {reservoirData?.yday_rate}%</Typography>
                <Typography sx={{ mt: 2 }}>기준일시 - {reservoirData?.now_date}</Typography>
              </>
            )}
          </Paper>
        </Fade>
      </Modal>
    </>
  );
}

export default DetailModal;
