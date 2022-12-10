import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box } from '@mui/material';
const Certificate = () => {
  return (
    <Box display="flex" justifyContent="center" direction="column">
      <StaticImage
        src="../../../images/AccesBars_certifikat.png"
        alt="workshop"
        height={500}
        style={{
          border: '1px solid pink',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
};

export default Certificate;
