import { 
  Backdrop, 
  Box, 
  CircularProgress, 
  Typography 
} from '@mui/material';

export interface ILoadingProps {
  text?: string;
  isOpen: boolean;
};

export function Loading(props: ILoadingProps) {
  const { text, isOpen } = props;
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Backdrop
        sx={{ color: '#fff', zIndex: 999 }}
        open={isOpen}
      >
        <CircularProgress color="primary" />
        <Typography sx={{ marginLeft: '20px' }}>
          {text ? text : 'Loading...'}
        </Typography>
      </Backdrop>
    </Box>
  );
};
