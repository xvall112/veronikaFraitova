import React from 'react';
import { graphql } from 'gatsby';
import MeditationTemplate from '../../views/MeditationTemplate/MeditationTemplate';
import Seo from '../../components/Seo';
export const query = graphql`
  query($slug: String!) {
    contentfulEshop(slug: { eq: $slug }) {
      cena
      obrazek {
        file {
          url
        }
        gatsbyImageData(layout: CONSTRAINED, quality: 30, placeholder: BLURRED)
        title
      }
      kratkyPopis
      slug
      title
      tlacitkoZSimpleshop
      recenzeHodnoceni {
        recenze
        jmeno
        hodnoceni
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
