/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
    [MARKS.BOLD]: (text) => <b>{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography variant="h1">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography variant="h2">{children}</Typography>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Typography variant="h3">{children}</Typography>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Typography variant="h4">{children}</Typography>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Typography variant="h5">{children}</Typography>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Typography variant="h6">{children}</Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box textAlign="justify" pb={2}>
        <Typography variant="subtitle1">{children}</Typography>
      </Box>
    ),

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, gatsbyImageData } = node.data.target;
      if (!gatsbyImageData) {
        // asset is not an image
        return null;
      }
      return (
        <Box my={2}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={title}
            formats={['auto', 'webp', 'avif']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '5px',
              WebkitBorderRadius: '5px',
            }}
          />
          <Box textAlign="center">
            <Typography variant="caption">{title}</Typography>
          </Box>
        </Box>
      );
    },
  },
};

const Content = ({ body }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        '& blockquote h6': {
          fontWeight: 700,
          color: theme.palette.primary.main,
          textAlign: 'center !important',
          fontSize: '2.0243rem !important',
          lineHeight: 1.235,
        },
      }}
    >
      {body && renderRichText(body, options)}
    </Box>
  );
};
export default Content;
