import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from './components/Tab';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import { Headline, Details, SimilarProducts } from './components';
import Main from '../../layouts/Main';
import Container from 'components/Container';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_CJYX4qqfi2dnL2pfOsugSU5s002fE7HyUV');

const MeditationTemplate = ({ data }) => {
  const theme = useTheme();
  const {
    cena,
    obrazek,
    title,
    tlacitkoZSimpleshop,
    kratkyPopis,
    popisDlouhytext,
    recenzeHodnoceni,
  } = data.data.contentfulEshop;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await axios({
      method: 'post',
      url: 'https://www.veronikafraitova.cz/.netlify/functions/stripe',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        price: cena,
        name: title,
        img: `https:${obrazek.file.url}`,
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
              <Box sx={{ '& img': { WebkitBorderRadius: theme.spacing(2) } }}>
                <GatsbyImage
                  image={obrazek.gatsbyImageData}
                  alt={obrazek.title}
                  style={{ height: '60vh', borderRadius: theme.spacing(2) }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Details
                title={title}
                description={kratkyPopis}
                price={cena}
                reviewCount={recenzeHodnoceni ? recenzeHodnoceni.length : 0}
                reviewScore={5}
                handleClick={handleClick}
                loading={loading}
                link={tlacitkoZSimpleshop}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Tab
          reviews={recenzeHodnoceni}
          describe={popisDlouhytext}
          meditaceName={title}
        />
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
