import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import { Headline, Details, Reviews, SimilarProducts } from './components';
import Main from '../../layouts/Main';
import Container from 'components/Container';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_CJYX4qqfi2dnL2pfOsugSU5s002fE7HyUV');

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
  const {
    cena,
    obrazek,
    title,
    tlacitkoZSimpleshop,
  } = data.data.contentfulEshop;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await axios({
      method: 'post',
      url: 'https://localhost:8888/.netlify/functions/stripe',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        price: cena,
        name: title,
        img: obrazek.file.url,
        url: tlacitkoZSimpleshop,
      },
    })
      .then((res) => res.data)
      .catch((error) => console.log(error));

    // When the customer clicks on the button, redirect them to Checkout.
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });

    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };
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
                style={{ height: '60vh', borderRadius: theme.spacing(2) }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Details
                title={title}
                description={mock.description}
                price={cena}
                reviewCount={mock.reviewCount}
                reviewScore={5}
                handleClick={handleClick}
                loading={loading}
                link={tlacitkoZSimpleshop}
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
