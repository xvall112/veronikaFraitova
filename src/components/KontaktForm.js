import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';
const KontaktForm = ({ buttonText, predmet }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        size={'large'}
        fullWidth
        onClick={handleClickOpen}
      >
        {buttonText}
      </Button>
      <Dialog
        onClose={onClose}
        open={open}
        maxWidth={'sm'}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 2,
          },
        }}
      >
        <Box paddingY={2} paddingX={{ xs: 2, md: 4 }}>
          <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'h5'} fontWeight={700}>
              Kontakt
            </Typography>
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
              onClick={onClose}
              sx={{ cursor: 'pointer' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </Box>
          </Box>
          <Box paddingY={2}>
            <Form />
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

KontaktForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  predmet: PropTypes.string,
};

export default KontaktForm;
