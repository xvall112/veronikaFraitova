import React from 'react';
import { graphql } from 'gatsby';
import WorkshopTemplateAkce from '../../views/WorkshopAkceTemplate/WorkshopTemplateAkce';
import Seo from '../../components/Seo';

export const query = graphql`
  query($slug: String!) {
    contentfulWorkshopAkce(slug: { eq: $slug }) {
      slug
      metaDescription
      title
      misto
      dateOfEvent(formatString: "DD.MM.YYYY")
      popis {
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
      cena
      delka
      pocetMist
    }
  }
`;

const WorkshopAkceOverview = (props) => {
  return (
    <>
      <Seo
        title={props.data.contentfulWorkshopAkce.title}
        description={props.data.contentfulWorkshopAkce.metaDescription}
      />
      <WorkshopTemplateAkce data={props} />;
    </>
  );
};

export default WorkshopAkceOverview;
