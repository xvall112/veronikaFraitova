import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Headline = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.secondary.main,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.8,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          fontWeight={600}
          variant={'h2'}
          gutterBottom
          align={'center'}
        >
          {title}
        </Typography>

        <Typography variant="h6" color={'text.secondary'} align={'center'}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

Headline.propTypes = {
  title: PropTypes.node.string,
  subtitle: PropTypes.node.string,
};
export default Headline;
