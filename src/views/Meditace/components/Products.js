import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from '@mui/material/styles';

export const query = graphql`
  {
    allContentfulEshop {
      nodes {
        slug
        title
        obrazek {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 30)
          title
        }
        cena
      }
    }
  }
`;

const Products = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        {data.allContentfulEshop.nodes.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Link}
              to={`/meditace/${item.slug}`}
              display={'block'}
              width={1}
              height={1}
              sx={{ textDecoration: 'none !important' }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                    paddingBottom: 0,
                    background: theme.palette.alternate.main,
                  }}
                >
                  <Box
                    component={GatsbyImage}
                    image={item.obrazek.gatsbyImageData}
                    alt={item.obrazek.title}
                    style={{
                      height: '100%',
                      width: '100%',

                      // You can set a maximum height for the image, if you wish.
                      // maxHeight: 600,
                    }}
                    formats={['auto', 'webp', 'avif']}
                  />
                </CardMedia>
                <Box component={CardContent}>
                  <Typography
                    height={{ sx: 'auto', md: '100px' }}
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                    overflow={'hidden'}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    display={'flex'}
                    justifyContent={'flex-start'}
                    marginY={1}
                  >
                    <Box display={'flex'} justifyContent={'center'}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Box key={item} color={theme.palette.secondary.main}>
                          <svg
                            width={18}
                            height={18}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 700 }} color={'primary'}>
                      {item.cena === 0 ? 'Zdarma' : `${item.cena} Kč`}
                    </Typography>
                    <Button variant={'outlined'}>
                      {item.cena === 0 ? 'Stáhnout' : 'Koupit'}
                    </Button>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
