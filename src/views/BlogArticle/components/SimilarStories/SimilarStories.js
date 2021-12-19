import React from 'react';
import { useTheme } from '@mui/material/styles';
import { navigate, Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export const query = graphql`
  {
    allContentfulBlogPost(limit: 3) {
      nodes {
        title
        uvodniText
        slug
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          title
        }
      }
    }
  }
`;

const SimilarStories = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center' }}
        flexDirection={{ sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Další články
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 0, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
            onClick={() => navigate('/blog')}
          >
            Prozkoumat vše
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {data.allContentfulBlogPost.nodes.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
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
                boxShadow={4}
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
                      left: 0,
                      bottom: 0,
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

export default SimilarStories;
