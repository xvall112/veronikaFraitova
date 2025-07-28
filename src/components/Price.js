import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import SignInEventsForm from './SignInEventsForm';

import Container from 'components/Container';

export const query = graphql`
  {
    contentfulCenik {
      cenik {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

const Price = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={800}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={isMd ? 0 : 2}
      >
        <Grid item container alignItems={'center'} xs={12}>
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            border={0}
            width={'100%'}
          >
            <CardContent sx={{ padding: '0px !important' }}>
              <Box
                marginBottom={4}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <GatsbyImage
                  image={data.contentfulCenik.cenik.gatsbyImageData}
                  alt={'cenik'}
                  formats={['auto', 'webp', 'avif']}
                  style={{ width: '100%', zIndex: 1 }}
                />
              </Box>
              <CardActions sx={{ justifyContent: 'center', marginTop: 4 }}>
                <SignInEventsForm
                  buttonText="Objednat se"
                  title="Objednat se"
                  predmet="Objednávka"
                />
              </CardActions>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Price;
