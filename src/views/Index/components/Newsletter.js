/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

export const query = graphql`
  {
    allContentfulMonthEvents {
      nodes {
        image {
          gatsbyImageData(placeholder: BLURRED, height: 400)
          title
        }
      }
    }
  }
`;

const Newsletter = () => {
  const theme = useTheme();

  const data = useStaticQuery(query);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {data.allContentfulMonthEvents.nodes.map((item) => {
        return (
          <Card
            component={Link}
            to="/events"
            key={item.image.title}
            raised
            sx={{
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows[4],
                transition:
                  'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              },
            }}
          >
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.image.title}
              formats={['auto', 'webp', 'avif']}
              style={{
                height: '400px',
              }}
            />
          </Card>
        );
      })}
    </Box>
  );
};

export default Newsletter;
