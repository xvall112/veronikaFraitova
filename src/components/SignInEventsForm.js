import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Form from './Form';
import { contact } from '../data/data';
import { DialogTitle, DialogContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const SigInEvents = ({ buttonText = 'Přihlásit se', predmet, title }) => {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));
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
        fullScreen={matches}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle paddingY={{ xs: 2, md: 4 }}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'h5'} fontWeight={700}>
              {title}
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
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Form predmet={predmet} actionAfterSubmit={onClose} />
            <Box display="flex" alignItems="center" py={2}>
              <Box
                sx={{
                  borderBottom: '1px solid #D9D9D9',
                  flexGrow: 1,
                  margin: '0 1rem',
                }}
              />
              <Typography variant="body1">nebo</Typography>
              <Box
                sx={{
                  borderBottom: '1px solid #D9D9D9',
                  flexGrow: 1,
                  margin: '0 1rem',
                }}
              />
            </Box>
            <Button
              size={'large'}
              variant="outlined"
              fullWidth
              component={'a'}
              href={`tel:${contact.mobil}`}
            >
              Telefon: {contact.mobil}
            </Button>
            <Button
              size={'large'}
              variant="outlined"
              fullWidth
              component={'a'}
              href={`mailto:${contact.mobil}`}
            >
              Email: {contact.email}
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

SigInEvents.propTypes = {
  buttonText: PropTypes.string.isRequired,
  predmet: PropTypes.string,
};

export default SigInEvents;
