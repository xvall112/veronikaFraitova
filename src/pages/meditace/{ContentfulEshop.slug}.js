import React from 'react';
import { graphql } from 'gatsby';
import MeditationTemplate from '../../views/MeditationTemplate/MeditationTemplate';
import Seo from '../../components/Seo';
export const query = graphql`
  query($slug: String!) {
    contentfulEshop(slug: { eq: $slug }) {
      cena
      obrazek {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 30)
        title
      }
      slug
      title
      popisUvod {
        raw
      }
      popisDlouhytext {
        raw
      }
    }
  }
`;

const MeditationOverview = (props) => {
  return (
    <>
      <Seo title={props.data.contentfulEshop.title} />
      <MeditationTemplate data={props} />
    </>
  );
};

export default MeditationOverview;
