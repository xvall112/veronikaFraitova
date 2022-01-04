import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { FeedbackForm } from './components';

const Reviews = ({ reviews, meditaceName }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'h5'} fontWeight={700}>
            Recenze
          </Typography>
          {reviews ? (
            <>
              <Box display={'flex'} alignItems={'center'} marginY={2}>
                <Typography variant={'h2'} fontWeight={700} marginRight={1}>
                  5.0
                </Typography>
                <Box>
                  <Box display={'flex'} alignItems={'center'}>
                    {[1, 2, 3, 4, 5].map((r) => (
                      <Box
                        key={r}
                        component={'svg'}
                        color={
                          r <= 5
                            ? theme.palette.primary.main
                            : theme.palette.divider
                        }
                        width={24}
                        height={24}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </Box>
                    ))}
                  </Box>
                  <Typography color={'text.secondary'}>
                    Na základě {reviews ? reviews.length : 0} hodnocení
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Typography variant="h6" pb={2}>
              Meditace nemá žádnou recenzi. Buďte první kdo ji napíše
            </Typography>
          )}

          <Stack direction={'row'} spacing={2}>
            <Button
              size={'large'}
              variant={'outlined'}
              sx={{
                marginTop: { xs: 2, md: 0 },
              }}
              onClick={() => setOpen(true)}
            >
              Napsat recenzi
            </Button>
          </Stack>
        </Grid>
        {reviews &&
          reviews.map((item, i) => (
            <Grid key={i} xs={12} sm={6} item>
              <Box display={'flex'} alignItems={'center'}>
                {[1, 2, 3, 4, 5].map((r) => (
                  <Box
                    key={r}
                    component={'svg'}
                    color={
                      r <= item.hodnoceni
                        ? theme.palette.primary.main
                        : theme.palette.divider
                    }
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </Box>
              <Typography variant={'caption'} color={'text.secondary'}>
                {item.jmeno}
              </Typography>
              <Typography marginY={1}>{item.title}</Typography>
              <Typography>{item.recenze}</Typography>
            </Grid>
          ))}
      </Grid>
      <FeedbackForm
        open={open}
        onClose={() => setOpen(false)}
        meditaceName={meditaceName}
      />
    </Box>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.any,
  meditaceName: PropTypes.string,
};
export default Reviews;
