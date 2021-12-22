import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { Link } from 'gatsby';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const query = graphql`
  {
    allContentfulBlogPost(limit: 3) {
      nodes {
        image {
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
                borderRadius={theme.borderRadius}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.image.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    '& img': { WebkitBorderRadius: theme.spacing(2) },
                  }}
                >
                  <GatsbyImage
                    image={item.image.gatsbyImageData}
                    alt={item.image.title}
                    style={{
                      height: '100%',
                      zIndex: 1,
                    }}
                    formats={['auto', 'webp', 'avif']}
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
                      zIndex: 2,
                      transformOrigin: 'top center',
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
        <Grid item container justifyContent={'center'} xs={12}>
          <Button
            fullWidth
            onClick={() => {
              navigate('/blog');
            }}
            variant={'outlined'}
            size={'large'}
            sx={{ height: 54, maxWidth: 400, justifyContent: 'space-between' }}
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
            Všechny články
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Result;
