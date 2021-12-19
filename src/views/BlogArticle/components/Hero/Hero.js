import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import Container from 'components/Container';

const Hero = ({ title }) => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 500 }}
      display={'flex'}
      marginTop={-13}
      paddingTop={13}
      alignItems={'center'}
    >
      <Box
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(theme.palette.primary.main, 0.1),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.primary,
              marginBottom: 2,
            }}
          >
            {title}
          </Typography>
          {/*  <Box display={'flex'} alignItems={'center'}>
            <Avatar
              sx={{ width: 60, height: 60, marginRight: 2 }}
              src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
            />
            <ListItemText
              sx={{ margin: 0 }}
              primary={'Jhon Anderson'}
              secondary={'May 19, 2021'}
              primaryTypographyProps={{
                variant: 'h6',
                sx: { color: 'common.white' },
              }}
              secondaryTypographyProps={{
                sx: { color: alpha('#ffffff', 0.8) },
              }}
            />
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};
Hero.propTypes = {
  title: PropTypes.string,
};
export default Hero;
