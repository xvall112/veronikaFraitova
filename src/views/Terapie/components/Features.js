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
        <Grid item container alignItems={'center'} xs={12}>
          <Box mb={10}>
            <Grid container>
              {[
                'NLP – Neuro-Lingvistické programování ',
                'Neuro – Nervový systém – mysl',
                'Lingvistické – Jazykověda a další neverbální komunikační systémy s jejichž pomocí jsou naše nervová zobrazení kódována (uspořádána) a je jim dán význam',
                'Programování – Schopnost najít a porozumět programům, které používáme ve svém životě a „přeprogramovat“ je tak, jak chceme. ',
                'NLP jsou techniky a dovednosti, které pomáhají ovládat náš mozek a efektivně s ním pracovat tak, abychom mysleli a jednali v náš prospěch. ',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
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
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Co můžeme společně řešit?
              </Typography>
              <Typography color="text.secondary">Cokoli Vás napadne</Typography>
            </Box>
            <Grid container>
              {[
  
                'Vztahy, zdraví, práce, poslání, finance',
                'Fyzické i psychické problémy',
                'Strachy, úzkosti, deprese, panické ataky, vyhoření',
                'Děti, nemoci dětí, děti jako naši učitelé',
                'Životní změny',
                'Nalezení hlubšího smyslu života',
                'Ženství',
                'Životní energie',
                'Rodové linie, zatížení',
                'Energie, práce s energií, entity',
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
              '& img': { WebkitBorderRadius: '20px' },
            }}
          >
            <StaticImage
              src="../../../images/terapie.JPG"
              alt="accesimagebars"
              style={{ borderRadius: '20px', webkitBorderRadius: '20px', height: 400 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
              Jak probíhá terapie…
            </Typography>
            <Typography color="text.secondary">
              V příjemném, bezpečném prostředí se společně podíváme na Vaše
              aktuální témata, která jsou v daný moment nejdůležitější. Položíte
              se do relaxačního křesla a v jemném napojení se společně podíváme
              na příčinu Vašeho trápení. Jednoduchými, úžasnými technikami
              zpracujeme a odstraníme bolesti jednou pro vždy z Vašeho života.
              Hlouběji se na situaci podíváme, abyste porozuměli tomu, proč se
              to ve Vašem životě děje. Proč se Vám situace opakuje a co Vás má
              naučit. Najdeme řešení problémů, které Vám brání žít spokojený,
              naplněný život v lásce a ve zdraví.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
