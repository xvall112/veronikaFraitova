import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Jak mě můžete kontaktovat?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          Pokud máte nějaké otázky ohledně obchodních podmínek můžete mě
          kontaktovat:
        </Typography>
        <Typography variant={'subtitle2'}>
          veronika.fraitova@seznam.cz
          <br />
          (+420) 773 308 300
          <br />
          Hailova 117, Příbram
          <br />
          Česká republika
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
