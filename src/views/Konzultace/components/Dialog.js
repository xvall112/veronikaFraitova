import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ContentfulRitchText from '../../../utils/ContentfulRitchText';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogObjednat from '../../../components/Dialog';
import Stack from '@mui/material/Stack';

const DialogView = ({ onClose, open, title, text, image }) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth={'lg'} fullWidth>
      <Box paddingY={{ xs: 1, sm: 2 }} paddingX={{ xs: 2, sm: 4 }}>
        <Box
          paddingY={{ xs: 1, sm: 2 }}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Typography variant={'h4'}>{title}</Typography>
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
        <Box px={{ xs: 0, md: 4 }}>
          <Stack
            spacing={{ xs: 2, md: 6 }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <GatsbyImage image={image} alt={title} style={{ width: '50%' }} />
            <ContentfulRitchText body={text} />
            <DialogObjednat />
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
};

DialogView.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.any,
  image: PropTypes.any,
};

export default DialogView;
