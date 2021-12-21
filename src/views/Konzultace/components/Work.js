import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Můžeme sami regulovalovat a uzdravovat své tělo.',
    description:
      'U každého orgánu v našem těle byla zdokumentována schopnost léčit se a opravovat genetická poškození, pokud k tomu má správné prostředí. Máme v sobě mimořádné schopnosti, které to dokáží. Máme nástroje, kterými si můžeme vytvářet lepší život. Vědecká poznání Kvantové fyziky, Neurovědy, Epigenetiky, propojení těla a mysli dokazují tyto možnosti.',
    img: (
      <StaticImage
        src="../../../images/zivotniEnergie.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Všichni v sobě máme vnitřní moudrost a sílu',
    description:
      'díky které můžeme překonat i ty nejtěžší životní situace a vyléčit se ze svých nemocí. Pomůžu vám spojit se s vaší vnitřní silou. Pomůžu vám pochopit a uvědomit si důvod vašich problémů, které následně odstraníme. Zaměříme se na uvědomění si podvědomých programů, které negativně ovlivňují váš život. Nemoci a trápení, které v životě prožíváme, nevznikají sami od sebe, ale vznikají na základě nesouladu uvnitř člověka.',
    img: (
      <StaticImage
        src="../../../images/meditacniHudba.png"
        alt="vztahy"
        placeholder="blurred"
        height={300}
      />
    ),
  },
  {
    title: 'Vědomá práce na sobě',
    description:
      'Moc ráda pomohu všem, kteří se opravdu z celého srdce touží uzdravit a osvobodit od svého trápení. Těm, kteří touží poznat sami sebe a shodit okovy, které je svazují a brání jim v radostném životě. Vše máme ve svých rukách. I naše zdraví. Nejsme bezmocní, právě naopak.',
    img: (
      <StaticImage
        src="../../../images/silaPresvedceni.png"
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
