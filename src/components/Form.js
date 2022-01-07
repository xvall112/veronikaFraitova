import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cogoToast from 'cogo-toast';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
  zprava: yup.string('Napiště zprávu').required('Napiš zprávu'),
  phone: yup.number('mobilní číslo').required('Vyplňte mobilní číslo'),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      zprava: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'KontaktniFormular',
          ...values,
        }),
      })
        .then(() => {
          cogoToast.success('Zpráva byla odeslána', {
            position: 'top-right',
          });
          formik.resetForm();
        })
        .catch((error) => cogoToast.alert(error, { position: 'top-right' }));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      data-netlify="true"
      name="KontaktniFormular"
      method="post"
    >
      <input type="hidden" name="form-name" value="KontaktniFormular" />
      <Grid container spacing={2}>
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
            Mobil
          </Typography>
          <TextField
            label="Mobil *"
            variant="outlined"
            fullWidth
            type="tel"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
            Text
          </Typography>
          <TextField
            label="Text *"
            variant="outlined"
            fullWidth
            type="text"
            id="zprava"
            name="zprava"
            value={formik.values.zprava}
            onChange={formik.handleChange}
            error={formik.touched.zprava && Boolean(formik.errors.zprava)}
            helperText={formik.touched.zprava && formik.errors.zprava}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item container xs={12}>
          <Button size={'large'} variant={'contained'} type="submit">
            Odeslat
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
