import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { contact } from '../../../../data/data';
import DialogDownload from '../DialogDownload';
import CircularProgress from '@mui/material/CircularProgress';

const mock = [
  {
    title: '14 dní na vrácení ',
    subtitle: 'Není to podle vašich představ? Máte 14 dní na vrácení',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'Doručujeme na email',
    subtitle: 'Meditaci automaticky obdržíte na email',
    icon: (
      <svg
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
];

const Details = ({
  title,
  description,
  price,
  reviewCount,
  handleClick,
  loading,
  reviewScore,
  link,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography fontWeight={700} sx={{ maxWidth: '300px' }}>
          {title}
        </Typography>
        <Typography
          fontWeight={700}
          noWrap
          xs={6}
          color={theme.palette.primary.main}
        >
          {price === 0 ? 'Zdarma' : `${price} Kč`}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} marginTop={2}>
        <Typography marginRight={1} fontWeight={700} color={'text.secondary'}>
          {reviewScore}.0
        </Typography>
        <Box display={'flex'} justifyContent={'flex-start'}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box
              key={item}
              color={item <= reviewScore ? 'secondary.main' : 'divider'}
              display={'flex'}
              alignItems={'center'}
            >
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
        <Link marginLeft={2} href={'#reviews'} underline={'hover'}>
          ({reviewCount})
        </Link>
      </Box>
      <Box marginTop={4}>
        <Typography>Popis</Typography>
        <Typography
          variant={'subtitle2'}
          color={'text.secondary'}
          marginTop={1}
        >
          {description}
        </Typography>
      </Box>
      <Box marginTop={4}>
        {price === 0 ? (
          <DialogDownload link={link} />
        ) : (
          <Button
            variant={'contained'}
            color={'primary'}
            size={'large'}
            fullWidth
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? <CircularProgress /> : 'Koupit'}
          </Button>
        )}
      </Box>

      <Divider sx={{ marginTop: 4 }} />

      <Box marginTop={4}>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={6}>
              <ListItem
                component="div"
                disableGutters
                sx={{
                  alignItems: 'flex-start',
                  padding: 0,
                }}
              >
                <ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
                  <Box color={'text.secondary'}>{item.icon}</Box>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: 700,
                  }}
                  secondaryTypographyProps={{
                    variant: 'caption',
                  }}
                  sx={{
                    margin: 0,
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box marginTop={4}>
        <Typography>Potřebujete poradit?</Typography>
        <Stack direction={'row'} spacing={2} marginTop={0.5}>
          <Button
            component={'a'}
            href={`tel:${contact.mobil}`}
            sx={{
              color: 'text.secondary',
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            }
          >
            Volejte
          </Button>
          <Button
            component={'a'}
            href={`mailto:${contact.email}`}
            sx={{
              color: 'text.secondary',
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Email
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  price: PropTypes.any,
  reviewCount: PropTypes.number.isRequired,
  reviewScore: PropTypes.number.isRequired,
  handleClick: PropTypes.any,
  loading: PropTypes.any,
  link: PropTypes.string,
  reviews: PropTypes.any,
};

export default Details;
