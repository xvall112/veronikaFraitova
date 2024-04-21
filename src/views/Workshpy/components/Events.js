import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import SignInEventsForm from '../../../components/SignInEventsForm';

export const query = graphql`
  {
    allContentfulWorkshopAkce(sort: { dateOfEvent: ASC }) {
      nodes {
        title
        slug
        misto
        dateOfEvent(formatString: "DD.MM.YYYY")
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          title
        }
        delka
      }
    }
  }
`;

const Events = () => {
  const data = useStaticQuery(query);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Akce
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {data.allContentfulWorkshopAkce.nodes.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            {/* <Box
              component={Link}
              to={`/events/${item.slug}`}
              display={'block'}
              width={1}
              height={1}
              sx={{ textDecoration: 'none !important' }}
            > */}
            <Box
              component={Card}
              width={1}
              height={1}
              display={'flex'}
              flexDirection={'column'}
            >
              <CardMedia
                title={item.title}
                sx={{
                  position: 'relative',
                  height: { xs: 240, sm: 340, md: 280 },
                  overflow: 'hidden',
                  '& img': { WebkitBorderRadius: '10px 10px 0px 0px' },
                }}
              >
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  alt={item.image.title}
                  formats={['auto', 'webp', 'avif']}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant={'h6'}
                  align={'left'}
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>

                {item?.dateOfEvent && (
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </Box>

                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.dateOfEvent}
                    </Typography>
                  </Box>
                )}
                <Box display={'flex'} alignItems={'center'} marginY={2}>
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                    marginRight={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </Box>
                  <Typography variant={'subtitle2'} color="text.secondary">
                    {item.misto}
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                    marginRight={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </Box>
                  <Typography variant={'subtitle2'} color="text.secondary">
                    {item.delka}
                  </Typography>
                </Box>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  fullWidth
                  variant="outlined"
                  component={Link}
                  to={`/events/${item.slug}`}
                  // endIcon={
                  //   <Box
                  //     component={'svg'}
                  //     xmlns="http://www.w3.org/2000/svg"
                  //     fill="none"
                  //     viewBox="0 0 24 24"
                  //     stroke="currentColor"
                  //     width={24}
                  //     height={24}
                  //   >
                  //     <path
                  //       strokeLinecap="round"
                  //       strokeLinejoin="round"
                  //       strokeWidth={2}
                  //       d="M17 8l4 4m0 0l-4 4m4-4H3"
                  //     />
                  //   </Box>
                  // }
                >
                  Chci vědět více
                </Button>
                <SignInEventsForm title={item.title} />
                {/* <Button variant="contained" fullWidth>
                    Přihlásit se
                  </Button> */}
              </CardActions>
            </Box>
            {/* </Box> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
