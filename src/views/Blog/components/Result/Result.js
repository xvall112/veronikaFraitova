import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        image {
          title
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 10
          )
          file {
            url
          }
        }
        title
        uvodniText

        slug
      }
    }
  }
`;

const Result = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        {data.allContentfulBlogPost.nodes.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={Link}
              to={`/blog/${item.slug}`}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={2}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <GatsbyImage
                    image={item.image.gatsbyImageData}
                    alt={item.image.title}
                    formats={['auto', 'webp', 'avif']}
                    style={{ height: '100%', zIndex: 1 }}
                  />
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                      zIndex: 2,
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box
                  component={CardContent}
                  position={'relative'}
                  sx={{ zIndex: 3 }}
                >
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.uvodniText}
                  </Typography>
                </Box>
                <Box flexGrow={1} marginBottom={2} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Result;
