import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect } from 'react';

interface DetailModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalEquipNo: number | undefined;
}

function DetailModal(props: DetailModalProps) {
  const { openModal, setOpenModal, modalEquipNo } = props;
  const handleClose = () => setOpenModal(false);
  useEffect((): void => {
    debugger;
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
          <Box
            sx={{
              width: '300px',
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4
            }}>
            <CloseIcon
              sx={{ cursor: 'pointer', position: 'absolute', top: '15px', right: '15px' }}
              onClick={handleClose}
            />
            <Typography variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Typography sx={{ mt: 2 }}>{modalEquipNo}</Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default DetailModal;
