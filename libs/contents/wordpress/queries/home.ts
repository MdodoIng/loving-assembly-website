const data = `{
    page(id: "cG9zdDoxMA==") {
      id
      title
      slug
      acf {
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
          fieldGroupName
          title
        }
        fifthSection {
          fieldGroupName
        }
        secondSectionChurch {
          button1Link
          button1Text
          button2Link
          button2Text
          description
          fieldGroupName
          title
        }
        thirdSectionWho {
          buttonLink
          buttonText
          description
          fieldGroupName
          title
        }
        fourthSection {
          fieldGroupName
          sectionDescription
          sectionTitle
        }
        fifthSection {
          fieldGroupName
        }
        sixthSection {
          description
          fieldGroupName
          title
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
