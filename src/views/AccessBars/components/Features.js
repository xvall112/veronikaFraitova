/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const Features = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Úžasné účinky Access Bars
              </Typography>
              <Typography color="text.secondary">
                Access Bars se dnes praktikuje ve více než 170ti zemích světa,
                používá se jako mocný a pragmatický nástroj, který dokáže
                zlepšit zdraví, úzkosti, stres, vztahy, finance, sex… a mnoho
                dalšího.
              </Typography>
            </Box>
            <Grid container>
              {[
                'Pomáhá při řešení jakékoli náročné životní situace',
                'Odstraňuje psychické problémy jako jsou různé strachy, úzkosti a deprese, panické ataky',
                'Uvolňuje napětí a stres',
                'Zlepšuje spánek, únavu, vyčerpání a zvyšuje životní energii',
                'Odstraňuje fyzickou bolest',
                'Pomáhá při nemocech jako jsou migrény, alergie, ekzémy, astma',
                'Pomáhá dětem s Autismem a hyperaktivitou',
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.primary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            height={1}
            width={1}
            display={'flex'}
            flexDirection={'column'}
            sx={{
              '& img': { WebkitBorderRadius: '100%' },
            }}
          >
            <StaticImage
              src="../../../images/accessBars.png"
              alt="accesimagebars"
              style={{ borderRadius: '100%', webkitBorderRadius: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
              Jak probíhá sezení
            </Typography>
            <Typography color="text.secondary">
              V příjemném prostředí ležíte na lehátku, uvolníte se a postupně se
              dostanete do hluboké relaxace. Skrze jemné doteky v kombinaci
              jednotlivých bars bodů se rozproudí energie v nejrůznějších
              oblastech vašeho života, jako jsou vztahy, zdraví, peníze, sny,
              harmonie, sex… Mozkové vlny se zpomalí, uvolníte tělo i mysl a
              vše, co vám způsobuje omezení, je zastaralé a již ve svém životě
              nepotřebujete bude postupně odcházet. Každé sezení je jiné, při
              každém můžete prociťovat něco jiného, ale všechno je správně. Vždy
              se dějí trvalé změny.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
