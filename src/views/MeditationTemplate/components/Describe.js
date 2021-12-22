import React from 'react';
import ContentfulRitchText from '../../../utils/ContentfulRitchText';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Describe = ({ describe }) => {
  return (
    <div>
      <Typography variant={'h5'} fontWeight={700} pb={2}>
        Popis
      </Typography>
      <ContentfulRitchText body={describe} />
    </div>
  );
};
Describe.propTypes = {
  describe: PropTypes.any,
};
export default Describe;
