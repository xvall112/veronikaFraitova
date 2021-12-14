/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const NewsletterWithCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={1}
      paddingY={3}
      paddingX={2}
      sx={{ borderTop: `2px solid ${theme.palette.primary.main}` }}
    >
      <CardContent>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box marginBottom={4}>
            <Typography
              variant="h4"
              align={'center'}
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Vědomý život
            </Typography>
            <Typography
              variant="body1"
              align={'center'}
              color={'text.secondary'}
            >
              Máme v sobě mimořádné schopnosti, které dokážou zázraky. Odpovědi
              na všechny otázky jsou ukryty v našem nitru. Nalezněte hlubší
              smysl života a vydejte se na cestu sebeobjevování a
              sebeuzdravování. Naše možnosti jsou neomezené, jen je v sobě najít
              a nechat kvést. Jsme obdaření úžasnými nástroji, díky kterým
              můžeme vytvářet lepší život. Všechno, co se nám v životě děje, je
              odrazem našeho vnitřního světa. Začněte žít život podle svých
              představ a pusťte se do svého osobního rozvoje.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default NewsletterWithCard;
