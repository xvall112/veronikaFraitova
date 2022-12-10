import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Hlavou nám denně prochází tisíce myšlenek.',
    description:
      'Žijeme ve stresu a uspěchané době. Hlavou nám denně prochází tisíce myšlenek a ať se snažíme sebevíc, nedaří se nám je vypnout. Přehnaně reagujeme na podněty okolo sebe. Máme strachy, deprese, úzkosti… Žijeme v kruhu a neustále se nám opakují nejrůznější scénáře v různých aspektech našeho života.',
    img: (
      <StaticImage
        src="../../../images/accessBars1.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Access Bars je úžasná jednoduchá a velmi účinná technika',
    description:
      'která vás dokáže „vypnout“. Jemná ruční technika, kterou představil Gary Douglas. Skládá se z 32ti energetických pruhů, které se pohybují skrz a kolem vaší hlavy a zahrnuje různé oblasti a aspekty vašeho života.  ',
    img: (
      <StaticImage
        src="../../../images/accessBars2.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Jakákoli omezení, která jste si během života vytvořili',
    description:
      ' jsou napojena na naše myšlenky, představy, postoje, rozhodnutí a přesvědčení o nich. Skrze jemné doteky přes bars body začneme vše uložené a uzamčené uvolňovat a postupně vymazávat z vaší hlavy i vašeho života.',
    img: (
      <StaticImage
        src="../../../images/accessBars3.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
];

const Work = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
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
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              {item.img}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
