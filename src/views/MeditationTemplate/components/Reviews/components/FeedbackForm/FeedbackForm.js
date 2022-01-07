import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cogoToast from 'cogo-toast';
import Rating from '@mui/material/Rating';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const validationSchema = yup.object({
  name: yup.string('Jmeno').required('Vyplňte jméno'),
  email: yup
    .string('Email')
    .email('Napište email ve správném tvaru')
    .required('Vyplňte email'),
  zprava: yup.string('Napiště recenzi').required('Napiš recenzi'),
  currentScore: yup.number(),
});

const FeedbackForm = ({ onClose, open, meditaceName }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      currentScore: 5,
      zprava: '',
      meditaceName: meditaceName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'recenze',
          ...values,
        }),
      })
        .then(() => {
          cogoToast.success('Recenze byla odeslána', {
            position: 'top-right',
          });
          formik.resetForm();
        })
        .catch((error) => cogoToast.alert(error, { position: 'top-right' }));
    },
  });

  return (
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
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h5'} fontWeight={700}>
            Napište hodnocení
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
          <form
            onSubmit={formik.handleSubmit}
            method="POST"
            data-netlify="true"
            name="recenze"
          >
            <input type="hidden" name="form-name" value="recenze" />
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    fullWidth
                    type="text"
                    id="meditaceName"
                    name="meditaceName"
                    disabled
                    value={formik.values.meditaceName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.meditaceName &&
                      Boolean(formik.errors.meditaceName)
                    }
                    helperText={
                      formik.touched.meditaceName && formik.errors.meditaceName
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Jméno
                  </Typography>
                  <TextField
                    label="Jméno *"
                    variant="outlined"
                    fullWidth
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    label="Email *"
                    variant="outlined"
                    name="email"
                    fullWidth
                    type="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Hodnocení
                  </Typography>
                  <Rating
                    name="currentScore"
                    value={formik.values.currentScore}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                    Text
                  </Typography>
                  <TextField
                    label="Text *"
                    variant="outlined"
                    type="text"
                    fullWidth
                    multiline
                    rows={5}
                    id="zprava"
                    name="zprava"
                    value={formik.values.zprava}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.zprava && Boolean(formik.errors.zprava)
                    }
                    helperText={formik.touched.zprava && formik.errors.zprava}
                  />
                </Grid>
                <Grid item container xs={12}>
                  <Button size={'large'} variant={'contained'} type="submit">
                    Odeslat
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
};

FeedbackForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  meditaceName: PropTypes.string,
};

export default FeedbackForm;
