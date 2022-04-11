import { Card, CardContent, Typography } from '@mui/material';
import LinearProgressWithLabel from './LinearProgressWithLabel';

interface ReservoirCardProps {
  name: string;
  ratio: number;
}

function ReservoirCard(props: ReservoirCardProps) {
  const { name, ratio } = props;

  return (
    <Card sx={{ my: 1 }}>
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
