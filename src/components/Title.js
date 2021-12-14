import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';

const Title = ({ title }) => {
  const theme = useTheme();
  return (
    <Box marginBottom={10}>
      <Typography
        variant={'h1'}
        fontWeight={700}
        color={'GrayText'}
        sx={{
          background: `linear-gradient(180deg, transparent 82%, ${alpha(
            theme.palette.secondary.main,
            0.3,
          )} 0%)`,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.node.string,
};
export default Title;
