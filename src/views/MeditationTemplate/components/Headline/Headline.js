import React from 'react';
import { navigate } from 'gatsby';

import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Headline = () => {
  return (
    <Button
      size={'Large'}
      startIcon={<ArrowBackIosIcon />}
      onClick={() => navigate('/meditace')}
    >
      Meditace
    </Button>
  );
};

export default Headline;
