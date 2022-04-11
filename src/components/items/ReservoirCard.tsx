import { Card, CardContent, Typography } from '@mui/material';
import LinearProgressWithLabel from './LinearProgressWithLabel';

interface ReservoirCardProps {
  name: string;
  ratio: number;
  equipNo: number;
  openDetailModal: (equipNo: number) => void;
}

function ReservoirCard(props: ReservoirCardProps) {
  const { name, ratio, equipNo, openDetailModal } = props;

  const clickCard = () => {
    openDetailModal(equipNo);
  };

  return (
    <Card sx={{ my: 1 }} onClick={clickCard}>
      <CardContent>
        <Typography
          sx={{ py: 1, textAlign: 'center', caretColor: 'transparent' }}
          variant='h5'
          component='div'>
          {name}
        </Typography>
        <LinearProgressWithLabel value={ratio} />
      </CardContent>
    </Card>
  );
}

export default ReservoirCard;
