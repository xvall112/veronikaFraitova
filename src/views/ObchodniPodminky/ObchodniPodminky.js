import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContentfulRitchText from '../../utils/ContentfulRitchText';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ContactCard } from './components';

export const query = graphql`
  {
    contentfulObchodniPodminky {
      updatedAt(formatString: "dd/MM/yyyy")
      textPodminky {
        raw
      }
    }
  }
`;

const ObchodniPodmiky = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Box boxShadow={4} borderRadius={2}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <Container paddingX={{ xs: 2, sm: 4 }}>
              <Typography
                variant={'h4'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                Obchodní podmínky
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                Naposledy upraveno{' '}
                <strong>{data.contentfulObchodniPodminky.updatedAt}</strong>
              </Typography>
            </Container>
            <Box
              component={'svg'}
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
              width={1}
              marginBottom={-1}
            >
              <path
                fill={theme.palette.background.paper}
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          <Container
            paddingTop={'0 !important'}
            paddingX={{ xs: 2, sm: 4 }}
            position={'relative'}
            top={0}
          >
            <Box
              component={Grid}
              container
              spacing={4}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
            >
              <Grid item xs={12} md={9}>
                <ContentfulRitchText
                  body={data.contentfulObchodniPodminky.textPodminky}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  position={'sticky'}
                  top={theme.spacing(10)}
                  className={'sticky'}
                >
                  <ContactCard />
                </Box>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </Main>
  );
};

export default ObchodniPodmiky;
