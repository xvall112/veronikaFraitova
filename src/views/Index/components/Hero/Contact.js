import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { contact } from '../../../../data/data';
import { Grid, IconButton } from '@mui/material';

const Contact = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <a href={contact.instagram}>
            <IconButton aria-label="instagram" color="primary">
              <InstagramIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.facebook}>
            <IconButton aria-label="facebook" color="primary">
              <FacebookIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.youtube}>
            <IconButton aria-label="facebook" color="primary">
              <YouTubeIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`mailto:${contact.email}`}>
            <IconButton aria-label="email" color="primary">
              <EmailOutlinedIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`tel:${contact.phone}`}>
            <IconButton aria-label="phone" color="primary">
              <PhoneOutlinedIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
