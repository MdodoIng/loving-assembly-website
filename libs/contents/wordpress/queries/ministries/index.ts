const data = `query new($slug: String!) {
  pages(where: {name: $slug}) {
    nodes {
      title
      slug
      acf: acfMinistryPage {
        bannerSection {
          title
          subtitle
          bannerImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        firstSection {
          icon {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
          content
        }
      }
    }
  }
}
`;

export default data;
