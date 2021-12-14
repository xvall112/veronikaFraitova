import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Contain = ({ children, ...rest }) => (
  <Container maxWidth={'xl'}>
    <Box
      width={1}
      margin={'0 auto'}
      paddingX={6}
      paddingY={{ xs: 4, sm: 6, md: 16 }}
      {...rest}
    >
      {children}
    </Box>
  </Container>
);

Contain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contain;
