interface HomePageType {
  page: {
    id: string;
    title: string;
    slug: string;
    acf: {
      bannerSection: {
        bannerImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      firstSectionWelcome: {
        buttion1Text?: string;
        button1Link?: string;
        button2Link?: string;
        button2Text?: string;
        description?: string;
        fieldGroupName: string;
        title?: string;
      };
      fifthSection: {
        fieldGroupName: string;
      };
      secondSectionChurch: {
        button1Link?: string;
        button1Text?: string;
        button2Link?: string;
        button2Text?: string;
        description?: string;
        fieldGroupName: string;
        title?: string;
      };
      thirdSectionWho: {
        buttonLink?: string;
        buttonText?: string;
        description?: string;
        fieldGroupName: string;
        title?: string;
      };
      fourthSection: {
        fieldGroupName: string;
        sectionDescription: any;
        sectionTitle: any;
      };
      sixthSection: {
        description: any;
        fieldGroupName: string;
        title: any;
      };
      seventhSectionJoinus: {
        description: any;
        facebookLink: any;
        fieldGroupName: string;
        instaLink: any;
        title: any;
      };
      eighthSection: {
        description: any;
        fieldGroupName: string;
        title: any;
      };
    };
  };
}
