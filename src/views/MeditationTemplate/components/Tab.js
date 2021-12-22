import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reviews from './Reviews/Reviews';
import Describe from './Describe';
import Stack from '@mui/material/Stack';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ reviews, describe }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} mt={{ xs: -5, md: -10 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="PopisRecenze">
          <Tab label={<Typography>Popis</Typography>} {...a11yProps(0)} />
          <Tab
            label={
              <Stack direction="row" spacing={2}>
                <Typography>Recenze</Typography>
                <Chip size="small" label={reviews ? reviews.length : 0} />
              </Stack>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Describe describe={describe} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Reviews reviews={reviews} />
      </TabPanel>
    </Box>
  );
}
BasicTabs.propTypes = {
  reviews: PropTypes.any,
  describe: PropTypes.any,
};
