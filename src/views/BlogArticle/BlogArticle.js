import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
/* import useMediaQuery from '@mui/material/useMediaQuery'; */
import PropTypes from 'prop-types';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Content, Hero, SidebarArticles, SimilarStories } from './components';

export const query = graphql`
  {
    meditace: allContentfulEshop(limit: 4) {
      nodes {
        slug
        title
        obrazek {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          title
        }
      }
    }
    workshopy: allContentfulWorkshopAkce(limit: 4) {
      nodes {
        title
        slug
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          title
        }
      }
    }
  }
`;

const BlogArticle = ({ data }) => {
  const dataa = useStaticQuery(query);
  const theme = useTheme();
  /* const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  }); */

  return (
    <Main colorInvert={true}>
      <Box>
        <Hero title={data.data.contentfulBlogPost.title} />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content body={data.data.contentfulBlogPost.body} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box marginBottom={4}>
                <SidebarArticles
                  link={'meditace'}
                  title={'Meditace'}
                  data={dataa.meditace.nodes}
                />
              </Box>
              {/* <Box marginBottom={4}>
                <SidebarArticles title={'Kurzy'} />
              </Box> */}
              <Box marginBottom={4}>
                <SidebarArticles
                  link={'workshopy'}
                  title={'Workshopy'}
                  data={dataa.workshopy.nodes}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <SimilarStories />
        </Container>

        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};
BlogArticle.propTypes = {
  data: PropTypes.any,
};
export default BlogArticle;
