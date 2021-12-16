/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Co dělám?',
    subtitle:
      'Intuitivním celostním přístupem pomáhám těm, kteří na sobě chtějí vědomě pracovat. Všem, kteří se chtějí uzdravit ze svých nemocí, najít svou vnitřní sílu, rovnováhu a štěstí a žít vědomý plnohodnotný život podle svých představ.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Věnuji se',
    subtitle:
      'Přes 18 let se věnuji svému vnitřnímu rozvoji a meditaci. Studovala jsem práce celosvětově uznávaných odborníků, absolvovala jsem mnoho kurzů, přednášek, workshopů, přečetla nespočet knih.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    color: colors.indigo[500],
    title: 'My všichni',
    subtitle:
      'Jsme mocnější než si dovedeme představit. Máme v sobě mimořádné schopnosti, díky kterým si dokážeme pomoci ze svých starostí, bolestí a vyléčit se z jakékoli nemoci. Máme nástroje, kterými si můžeme vytvářet lepší život.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    color: colors.deepPurple[500],
    title: 'Mentoři',
    subtitle:
      'Jedni z mých „nej“ učitelů od kterých jsem absolvovala certifikované kurzy a četla jejich knihy byli Dr. Joe Dispenza, Bruce Lipton, Ph. D., Gregg Braden, Alberto Villoldo, Ph. D. a další. Jsem jim nesmírně vděčná za poznání, které se mi od nich dostalo.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const AboutMe = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Grid
          container
          spacing={2}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Grid
            item
            container
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            xs={4}
            sx={{
              '& .lazy-load-image-loaded': {
                width: '80%',
                height: '80%',
                display: 'flex !important',
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              borderRadius={2}
              src={'https://assets.maccarianagency.com/backgrounds/img21.jpg'}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
              }}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent={'flex-start'}
            alignItems={'flex-end'}
            xs={8}
            sx={{
              '& .lazy-load-image-loaded': {
                display: 'flex !important',
                width: 1,
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              borderRadius={2}
              src={'https://assets.maccarianagency.com/backgrounds/img22.jpg'}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
              }}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent={'flex-end'}
            alignItems={'flex-start'}
            xs={8}
            sx={{
              '& .lazy-load-image-loaded': {
                display: 'flex !important',
                width: 1,
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              borderRadius={2}
              src={'https://assets.maccarianagency.com/backgrounds/img24.jpg'}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
              }}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            xs={4}
            sx={{
              '& .lazy-load-image-loaded': {
                width: '80%',
                height: '80%',
                display: 'flex !important',
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              borderRadius={2}
              src={'https://assets.maccarianagency.com/backgrounds/img25.jpg'}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={2}
        direction={isMd ? 'row' : 'column'}
        alignItems="flex-start"
      >
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Box
            component={Card}
            padding={{ xs: 2, md: 4 }}
            borderRadius={theme.borderRadius}
            width={1}
            sx={{
              position: 'sticky',
              top: '20px',
            }}
          >
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Bc.{' '}
              <Typography color="primary" variant="inherit" component="span">
                Veronika Fraitová
              </Typography>
            </Typography>
            <Typography
              variant={'body1'}
              component={'p'}
              color={'text.secondary'}
              textAlign={'justify'}
              /* sx={{ maxHeight: '50vh', overflow: 'hidden' }} */
            >
              Z celého srdce Vás tu vítám. Jmenuji se Veronika a pomáhám všem,
              kteří našli odvahu k vnitřní práci na sobě, k vyléčení traumat,
              strachů, nemocí a bolestí z jejich minulosti. Mám dvě úžasné děti,
              které nadevše miluji. Naučily mě svou nádhernou duší, plnou
              bezpodmínečné lásky, žít tady a teď. Vidět krásy všedního dne a
              naplno si užívat každý okamžik. Dovedly mě k uvědomění si mnoha
              věcí, a především k poznání, jak moc jsme na sebe napojeni a kolik
              si toho můžeme vzájemně předávat. Jsou mi velkou inspirací. Z
              celého srdce se snažím, abych viděla jejich rozzářené oči a
              šťastný smích co nejčastěji. Jsou mým každodenním sluncem. Díky
              svým životním zkouškám jsem se na své cestě dostala k úžasným
              oborům, technikám, metodám a poznání. V meditacích mi přicházeli
              neuvěřitelné informace, které mi tito úžasní lidé vysvětlili na
              vědecké bázi. Vědecká poznání Kvantové fyziky, Neurovědy,
              Epigenetiky, propojení těla a mysli tyto možnosti dokazují.
              Všechny mé znalosti obohacené několikaletou praxí nyní předávám
              svým klientkám a klientům a pomáhám jim na jejich cestě. Z celého
              srdce ráda pomohu i Vám. Vezměte zodpovědnost za svůj život do
              svých rukou a vydejte se na vědomou cestu sebepoznání. Každý z nás
              je tvůrce svého života. Nikdy není pozdě začít žit nový, lepší
              život v lásce a vděčnosti ❤️.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Grid container spacing={2}>
            {mock.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  display={'block'}
                  width={1}
                  sx={{
                    transform:
                      index % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
                  }}
                >
                  <Box
                    component={Card}
                    padding={{ xs: 2, md: 4 }}
                    borderRadius={theme.borderRadius}
                    width={1}
                  >
                    <Box display={'flex'} flexDirection={'column'}>
                      <Box
                        component={Avatar}
                        width={60}
                        height={60}
                        marginBottom={2}
                        bgcolor={alpha(theme.palette.primary.main, 0.1)}
                        color={theme.palette.primary.main}
                        variant={'rounded'}
                        borderRadius={2}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant={'h6'}
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary" textAlign={'justify'}>
                        {item.subtitle}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <Box
                        marginTop={2}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Button
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
                          Více
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
