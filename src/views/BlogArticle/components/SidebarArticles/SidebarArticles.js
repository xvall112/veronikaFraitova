/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SidebarArticles = ({ title, data }) => {
  const theme = useTheme();
  return (
    <Box
      component={Card}
      variant={'outlined'}
      padding={2}
      sx={{ borderColor: alpha(theme.palette.primary.main, 0.5) }}
    >
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              borderRadius={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{
                backgroundImage: 'none',
                bgcolor: 'transparent',
                color: `${theme.palette.text.main} !important`,
              }}
            >
              <Box
                component={Link}
                to={`/meditace/${item.slug}`}
                sx={{
                  textDecoration: 'none',
                }}
              >
                <Grid container direction="row" alignItems="center">
                  <Grid item xs={6} md={6}>
                    <GatsbyImage
                      image={
                        title === 'Workshopy'
                          ? item.image.gatsbyImageData
                          : item.obrazek.gatsbyImageData
                      }
                      alt={
                        title === 'Workshopy'
                          ? item.image.title
                          : item.obrazek.title
                      }
                      formats={['auto', 'webp', 'avif']}
                      style={{
                        borderRadius: theme.borderRadius,

                        height: '100px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <CardContent
                      sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
                    >
                      <Typography fontWeight={700}>{item.title}</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
SidebarArticles.propTypes = {
  title: PropTypes.string,
  data: PropTypes.any,
};
export default SidebarArticles;
