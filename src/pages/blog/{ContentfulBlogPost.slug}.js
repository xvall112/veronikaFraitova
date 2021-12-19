import React from 'react';
import { graphql } from 'gatsby';
import BlogArticleTemplate from '../../views/BlogArticle/BlogArticle';
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            id
            title
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const MeditationOverview = (props) => {
  return <BlogArticleTemplate data={props} />;
};

export default MeditationOverview;
