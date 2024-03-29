import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';

export const query = graphql`
  {
    allContentfulEshop(limit: 4) {
      nodes {
        cena
        obrazek {
          gatsbyImageData(placeholder: TRACED_SVG)
          title
        }
        slug
        title
        recenzeHodnoceni {
          jmeno
        }
      }
    }
  }
`;

const SimilarProducts = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant={'h5'} fontWeight={700}>
          Další meditace
        </Typography>
      </Grid>
      {data.allContentfulEshop.nodes.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Box display={'block'} width={1} height={1}>
            <Card
              sx={{
                width: 1,
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                bgcolor: 'transparent',
                backgroundImage: 'none',
              }}
            >
              <Box
                component={Link}
                to={`/meditace/${item.slug}`}
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                }}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: 320,
                    overflow: 'hidden',
                    borderRadius: 2,
                    '& img': { WebkitBorderRadius: theme.spacing(2) },
                  }}
                >
                  <GatsbyImage
                    image={item.obrazek.gatsbyImageData}
                    alt={item.obrazek.title}
                    style={{ height: '100%' }}
                  />
                </CardMedia>
                <Box marginTop={2}>
                  <Typography
                    fontWeight={700}
                    sx={{ textTransform: 'uppercase' }}
                    noWrap
                  >
                    {item.title}
                  </Typography>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.description}
                  </Typography>
                </Box>
                <Box
                  marginTop={2}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Typography fontWeight={700}>
                    {item.cena === 0 ? 'Zdarma' : `${item.cena} Kč`}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'}>
                    <Box display={'flex'} alignItems={'center'}>
                      {[1, 2, 3, 4, 5].map((r) => (
                        <Box
                          key={r}
                          component={'svg'}
                          color={
                            r <= 5
                              ? theme.palette.secondary.main
                              : theme.palette.divider
                          }
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </Box>
                      ))}
                    </Box>
                    <Typography
                      variant={'caption'}
                      color={'text.secondary'}
                      marginLeft={0.5}
                    >
                      (
                      {item.recenzeHodnoceni ? item.recenzeHodnoceni.length : 0}
                      )
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Button
                  component={Link}
                  to={`/meditace/${item.slug}`}
                  variant={'contained'}
                  color={'primary'}
                  size={'large'}
                  fullWidth
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={20}
                      height={20}
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  }
                >
                  {item.cena === 0 ? 'Stáhnout' : 'Koupit'}
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SimilarProducts;
