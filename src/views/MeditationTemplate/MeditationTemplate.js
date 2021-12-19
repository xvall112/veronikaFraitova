import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import { Headline, Details, Reviews, SimilarProducts } from './components';

import Main from '../../layouts/Main';
import Container from 'components/Container';

const mock = {
  images: ['https://assets.maccarianagency.com/backgrounds/img57.jpg'],
  title: 'Sport shoes',
  description:
    'The finishes of this product are very realistic with a double stitching on the neck, sleeves and bottom, and with a banded neck cleaning that allows optimal support in all situations.',
  price: '$59.99',
  reviewScore: 4,
  reviewCount: 519,
};
const MeditationTemplate = ({ data }) => {
  const theme = useTheme();
  const { cena, obrazek, title } = data.data.contentfulEshop;
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>
        <Box>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              <GatsbyImage
                image={obrazek.gatsbyImageData}
                alt={obrazek.title}
                style={{ height: '500px', borderRadius: theme.spacing(2) }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Details
                title={title}
                description={mock.description}
                price={cena}
                reviewCount={mock.reviewCount}
                reviewScore={5}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container paddingY={4} id="reviews">
        <Divider />
      </Container>
      <Container>
        <Reviews />
      </Container>
      <Container paddingY={4}>
        <Divider />
      </Container>
      <Container>
        <SimilarProducts />
      </Container>
    </Main>
  );
};
MeditationTemplate.propTypes = {
  data: PropTypes.any,
};
export default MeditationTemplate;
