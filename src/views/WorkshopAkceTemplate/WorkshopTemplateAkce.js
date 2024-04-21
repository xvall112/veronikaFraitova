import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import Main from '../../layouts/Main';
import ContentfulRitchText from '../../utils/ContentfulRitchText';
import Hero from './components/Hero';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Dialog from '../../components/Dialog';

const WorkshopTemplateAkce = ({ data }) => {
  const theme = useTheme();
  const {
    misto,
    title,
    popis,
    cena,
    delka,
    pocetMist,
    dateOfEvent,
  } = data.data.contentfulWorkshopAkce;
  return (
    <Main>
      <Hero title={title} />
      <Container>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={12} md={8}>
            <ContentfulRitchText body={popis} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component={Card}
              padding={{ xs: 2, md: 4 }}
              borderRadius={theme.borderRadius}
              width={1}
              sx={{
                position: 'sticky',
                top: '100px',
              }}
            >
              <Stack direction="column" spacing={2}>
                {/* <Typography variant="h4" fontWeight={700}>
                  {cena} Kč
                </Typography> */}
                {dateOfEvent && (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <Typography variant="body1">datum</Typography>
                    <Typography variant="body1" fontWeight={700}>
                      {dateOfEvent}
                    </Typography>
                  </Stack>
                )}

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="body1">místo</Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {misto}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="body1">délka</Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {delka}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="body1">počet míst</Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {pocetMist}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="body1">cena</Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {cena} Kč
                  </Typography>
                </Stack>
                <Divider />
                <Dialog eventName={title} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};
WorkshopTemplateAkce.propTypes = {
  data: PropTypes.any,
};
export default WorkshopTemplateAkce;
