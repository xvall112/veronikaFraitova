import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulAsset = (assetUrl) => {
  const { assets } = useStaticQuery(
    graphql`
      query CONTENTFUL_ASSET_QUERY {
        assets: allContentfulWorkshopAkce {
          edges {
            node {
              contentful_id
              title
              image {
                gatsbyImageData
                title
              }
            }
          }
        }
      }
    `,
  );
  const asset = assets.edges.find(
    ({ node }) => node.contentful_id === assetUrl,
  );
  return asset;
};
