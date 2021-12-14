import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { colors } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const mock = {
  /*  account: {
    title: 'Nabízím',
    subtitle: 'Let’s try to fix your account issues.',
    items: [
      {
        title: 'Find account number',
        updated: '1 week ago',
      },
      {
        title: 'ATMs and ATM fees',
        updated: 'a day ago',
      },
      {
        title: 'Business retirement services',
        updated: '2 month ago',
      },
      {
        title: 'Planning for major life events',
        updated: '4 days ago',
      },
    ],
  }, */
  billing: {
    title: 'Meditace',
    subtitle: 'Zdarma, placené, na míru',
    items: [
      {
        title: 'Business online banking and services',
        updated: '1 week ago',
      },
      {
        title: 'Business loans, lines & leasing',
        updated: 'a day ago',
      },
      {
        title: 'Mortgage basics',
        updated: '2 month ago',
      },
      {
        title: 'Credit cards',
        updated: '4 days ago',
      },
    ],
  },
  organizations: {
    title: 'Kurzy',
    subtitle: 'Naše novinka',
    items: [
      {
        title: 'Redeem rewards points',
        updated: '1 week ago',
      },
      {
        title: 'Growing a business',
        updated: 'a day ago',
      },
      {
        title: 'Accessible banking',
        updated: '2 month ago',
      },
      {
        title: 'Mobile banking',
        updated: '4 days ago',
      },
    ],
  },
  customizing: {
    title: 'Workshopy',
    subtitle: 'Přijď změnit svůj život',
    items: [
      {
        title: 'Planning for college',
        updated: '1 week ago',
      },
      {
        title: 'Learn about credit',
        updated: 'a day ago',
      },
      {
        title: 'Budgeting & saving',
        updated: '2 month ago',
      },
      {
        title: 'Transferring funds',
        updated: '4 days ago',
      },
    ],
  },
};

const Faq = () => {
  const theme = useTheme();
  const renderFaqBox = (title = '', subtitle = '') => (
    <Box
      component={Card}
      variant={'outlined'}
      bgcolor={'transparent'}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 2,
        },
      }}
    >
      <CardContent>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          flex={'1 1 100%'}
          justifyContent={{ sm: 'space-between' }}
          alignItems={{ sm: 'center' }}
        >
          <Typography fontWeight={700} sx={{ marginBottom: { xs: 1, sm: 0 } }}>
            {title}
          </Typography>
          <Typography variant={'caption'} color={'text.secondary'}>
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box marginBottom={2}>
            <Box
              component={Avatar}
              width={60}
              height={60}
              marginBottom={2}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              color={theme.palette.primary.main}
              variant={'rounded'}
              borderRadius={2}
            >
              <Box
                component={'svg'}
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </Box>
            </Box>
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.billing.title}
            </Typography>
            <Typography color={'text.secondary'}>
              {mock.billing.subtitle}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.billing.items.map((item, index) => (
              <Grid item xs={12} key={index}>
                {renderFaqBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginTop: 2 }}>
          <Box marginBottom={2}>
            <Box
              component={Avatar}
              width={60}
              height={60}
              marginBottom={2}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              color={theme.palette.primary.main}
              variant={'rounded'}
              borderRadius={2}
            >
              <Box
                component={'svg'}
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
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </Box>
            </Box>
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.organizations.title}
            </Typography>
            <Typography color={'text.secondary'}>
              {mock.organizations.subtitle}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.organizations.items.map((item, index) => (
              <Grid item xs={12} key={index}>
                {renderFaqBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginTop: 2 }}>
          <Box marginBottom={2}>
            <Box
              component={Avatar}
              width={60}
              height={60}
              marginBottom={2}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              color={theme.palette.primary.main}
              variant={'rounded'}
              borderRadius={2}
            >
              <Box
                component={'svg'}
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
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </Box>
            </Box>
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {mock.customizing.title}
            </Typography>
            <Typography color={'text.secondary'}>
              {mock.customizing.subtitle}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.customizing.items.map((item, index) => (
              <Grid item xs={12} key={index}>
                {renderFaqBox(item.title, `Last updated ${item.updated}`)}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faq;
