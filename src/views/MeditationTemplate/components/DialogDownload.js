import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import PropTypes from 'prop-types';

const validationSchema = yup.object({
  email: yup
    .string('Zadejte email')
    .email('Špatný tvar emailu')
    .required('Zadejte email'),
});

export default function FormDialog({ link }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      axios({
        method: 'post',
        url:
          'https://www.veronikafraitova.cz/.netlify/functions/sendGridMedZdarma',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          email: values.email,
          url: link,
        },
      })
        .then(() => {
          alert(`"Meditace byla odeslána na email:" ${values.email}`);
          actions.resetForm();
          actions.setSubmitting(false);
          handleClose();
        })
        .catch(() => {
          alert('Něco se pokazilo. Zkuste to znovu');
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} fullWidth>
        Stáhnout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Stáhnout</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Zadejte váš email pro stažení meditace. Meditace bude automaticky
              odeslána na váš email.
            </DialogContentText>
            <Box mt={2}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Zrušit</Button>
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Stáhnout
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
FormDialog.propTypes = {
  link: PropTypes.string,
};
