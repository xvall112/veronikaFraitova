import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const KontaktForm = ({ buttonText }) => {
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
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Jméno
                  </Typography>
                  <TextField
                    label="Jméno *"
                    variant="outlined"
                    name={'name'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    label="Email *"
                    variant="outlined"
                    name={'email'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Mobil
                  </Typography>
                  <TextField
                    label="Mobil *"
                    variant="outlined"
                    name={'email'}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Text
                  </Typography>
                  <TextField
                    label="Text *"
                    variant="outlined"
                    name={'feedback'}
                    fullWidth
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item container xs={12}>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Odeslat
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

KontaktForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default KontaktForm;
