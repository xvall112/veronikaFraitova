import React from 'react';
import { graphql } from 'gatsby';
import BlogArticleTemplate from '../../views/BlogArticle/BlogArticle';
import Seo from '../../components/Seo';
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
  return (
    <>
      <Seo title={props.data.contentfulBlogPost.title} />
      <BlogArticleTemplate data={props} />
    </>
  );
};

export default MeditationOverview;
