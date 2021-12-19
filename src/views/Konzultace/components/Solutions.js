import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import DialogView from './Dialog';

const mock = [
  {
    title: 'Zdravotní',
    description:
      'Vědomá práce s myslí a vědomím na úrovni duše. Existuje způsob, jak aktivovat imunitní systém pomocí vaší mentální a emocionální práce s propojením vědy kvantové fyziky.',

    img: (
      <StaticImage
        src="../../../images/health.png"
        alt="zdravi"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Vztahové',
    description:
      'Problémy ve vztazích jsou odrazem našich nezpracovaných bolestí z minulosti. Vše, co jsme zažili, máme uložené v naší podvědomé mysli. ',
    img: (
      <StaticImage
        src="../../../images/couple.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
];

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [openId, setOpenId] = useState(null);
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Zaměřuji se především na problémy
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(theme.palette.primary.main, 0.2)}
              boxShadow={0}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{ xs: 2, md: 4 }}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: { xs: '80%', md: '70%' },
                    },
                  }}
                >
                  {item.img}
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    size={'large'}
                    sx={{ marginTop: 2 }}
                    onClick={() => setOpenId(i)}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Dozvědět se více
                  </Button>
                </Box>
              </CardContent>
            </Box>
            <DialogView
              open={openId === i}
              title={item.title}
              text={item.text}
              onClose={() => setOpenId(null)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
