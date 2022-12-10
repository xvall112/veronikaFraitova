import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import { contact } from '../data/data';
import KontaktForm from './KontaktForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ title }) {
  const titleH = title || 'Objednat se';
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size={'large'}
        fullWidth
        onClick={handleClickOpen}
      >
        {titleH}
      </Button>
      <BootstrapDialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Objednat se pomocí
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <Button
              size={'large'}
              variant="contained"
              fullWidth
              component={'a'}
              href={`tel:${contact.mobil}`}
            >
              Telefon: {contact.mobil}
            </Button>
            <Button
              size={'large'}
              variant="contained"
              fullWidth
              component={'a'}
              href={`mailto:${contact.mobil}`}
            >
              Email: {contact.email}
            </Button>
            <KontaktForm buttonText={'Registrační formulář'} />
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
