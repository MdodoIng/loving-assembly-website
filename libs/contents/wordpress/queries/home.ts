const data = `{
    page(id: "cG9zdDoxMA==") {
      id
      title
      slug
      acf : acfHome {
        bannerSection {
          bannerImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        firstSectionWelcome {
          buttion1Text
          button1Link
          button2Link
          button2Text
          description
          title
        }
        
        secondSectionChurch {
          button1Link
          button1Text
          button2Link
          button2Text
          description
          title
          sectionImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        thirdSectionWho {
          buttonLink
          buttonText
          description
          title
          sectionImage{
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        fourthSection {
          fieldGroupName
          sectionDescription
          sectionTitle
        }
        fifthSection {
          sectionTitle
          sectionDescription
          sectionTitleTwo
          sectionDescriptionTwo
          sectionImage{
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
          posts {
            title
            description
            image {
              sourceUrl
              mediaDetails {
               height
               width
               }
              }
           }
        }
        sixthSection {
          description
          title
          boxSection {
            title
            description
            image {
              sourceUrl
              mediaDetails {
               height
               width
               }
            }
          }
        }
        seventhSectionJoinus {
          description
          facebookLink
          fieldGroupName
          instaLink
          title
        }
        eighthSection {
          description
          fieldGroupName
          title
        }
      }
    }
}`;
export default data;
