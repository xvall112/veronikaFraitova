/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Newsletter = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={'primary.main'} borderRadius={theme.borderRadius}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box marginBottom={4}>
            <Typography
              variant="h6"
              align={'center'}
              sx={{
                color: theme.palette.common.white,
              }}
              data-aos={'fade-up'}
            >
              Novinka
            </Typography>
            <Typography
              variant="h4"
              align={'center'}
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
              }}
            >
              Technika{' '}
              <span style={{ textDecoration: 'underline' }}>Access Bars</span>{' '}
              která ti změní život!
            </Typography>
          </Box>
          <Box
            component={Link}
            borderRadius={theme.borderRadius}
            to="/access-bars"
            fontSize={24}
            p={3}
            sx={{
              color: 'white',
              textDecoration: 'none',
              border: '2px solid white',
            }}
          >
            Klinkni pro více info
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
