/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    number: '1000+',
    title: 'Konzultace',
    subtitle: 'Choose from over 1000+ online video courses.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    number: '800+',
    title: 'Workshopy',
    subtitle: 'Expert instructors to make sure courses are well.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: '100K+',
    title: 'Kurzy',
    subtitle: '100K+ Active students arround the world.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    number: '400+',
    title: 'Meditace',
    subtitle: 'Free resources for all students arround the world.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const Blog = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Nabízím
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Our global class is open for all
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Moc ráda pomohu všem, kteří se opravdu z celého srdce touží uzdravit a
          osvobodit od svého trápení. Těm, kteří touží poznat sami sebe. Vše
          máme ve svých rukách. Nejsme bezmocní, právě naopak.
        </Typography>
      </Box> */}
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={6} key={i}>
              <Box
                component={Card}
                padding={4}
                borderRadius={theme.borderRadius}
                boxShadow={1}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                variant={'outlined'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  spacing={2}
                >
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h4'}
                    color={'primary'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    variant={'h4'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Button variant="outlined" color="primary" fullWidth={true}>
                    VÍCE
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;
