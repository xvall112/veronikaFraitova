import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Provedu Vás procesem změny a nastavíme Vaši mysl ',
    description:
      'Velmi mě naplňuje pomáhat a posouvat klienty směrem, který si přejí. Pokud máte i Vy chuť udělat ve svém životě změnu a nevíte jak na to nebo máte obavy udělat krok vpřed, moc ráda Vám pomohu. Provedu Vás procesem změny a nastavíme Vaši mysl směrem, kterým si přejete. Detailně prozkoumáme Vaše současné myšlenky, pocity a chování a změníme je tak, abyste co nejlépe a nejefektivněji dosáhli svých cílů.',
    img: (
      <StaticImage
        src="../../../images/undraw_through_the_park_lxnl.svg"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Vytvoříme nové návyky',
    description:
      'které Vás na cestě budou podporovat. Náš život tvoří našem myšlenky, emoce a přesvědčení. Vše můžeme kdykoli změnit. Tím, že to změníme ve svém vnitřním světě, změníme to i ve svém vnějším světě.',
    img: (
      <StaticImage
        src="../../../images/undraw_omega_-4-kob.svg"
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
