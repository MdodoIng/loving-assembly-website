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
        title?: string;
      };
      fifthSection: {
        sectionTitle: string;
        sectionDescription: string;
        sectionTitleTwo: string;
        sectionDescriptionTwo: string;
        sectionImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
        posts: Array<{
          title: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
          description: string;
        }>;
      };
      secondSectionChurch: {
        button1Link?: string;
        button1Text?: string;
        button2Link?: string;
        button2Text?: string;
        description?: string;
        title?: string;
        sectionImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      thirdSectionWho: {
        buttonLink?: string;
        buttonText?: string;
        description?: string;
        title?: string;
        sectionImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      fourthSection: {
        fieldGroupName: string;
        sectionDescription: any;
        sectionTitle: any;
        offerings: {
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          title: string;
        }[];
      };
      sixthSection: {
        description: any;
        title: any;
        boxSection: {
          title: string;
          description: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }[];
      };
      seventhSectionJoinus: {
        description: any;
        facebookLink: any;
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

interface KidsOfExcellenceType {
  page: {
    title: string;
    slug: string;
    acf: {
      bannerImage: {
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
      firstSection: {
        title: string;
        description: string;
        gallery: Array<{
          sourceUrl: string;
          mediaDetails: {
            height: number;
            width: number;
          };
        }>;
      };
      secondSection: {
        programmes: Array<{
          title: string;
          description: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
    };
  };
}

interface ManOfValourType {
  page: {
    title: string;
    slug: string;
    acf: {
      bannerImage: {
        sourceUrl: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
      firstSection: {
        title: string;
        description: string;
        content: string;
      };
      secondSection: {
        logo: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
        content: string;
        buttonText: string;
        buttonLink: string;
      };
      thirdSection: {
        boxes: {
          title: string;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          description: string;
        }[];
      };
    };
  };
}

interface MinistriesType {
  pages: {
    nodes: Array<{
      title: string;
      slug: string;
      acf: {
        bannerSection: {
          title: string;
          subtitle: any;
          bannerImage: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
        };
        firstSection: {
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          content: string;
          buttonText: string;
          buttonLink: string;
        };
      };
    }>;
  };
}

interface ContactUsPageType {
  page: {
    title: string;
    slug: string;
    acf: {
      firstSection: {
        title: string;
        description: string;
        boxes: Array<{
          title: string;
          description: string;
          link: any;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
      secondSection: {
        title: string;
        description: string;
        boxesLayout: Array<{
          title: string;
          description: string;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
    };
  };
}

interface TeamsType {
  teams: {
    edges: Array<{
      node: {
        title: string;
        slug: string;
        acf: {
          teamMemberDetails: {
            name: string;
            image: {
              sourceUrl: string;
              mediaDetails: {
                height: number;
                width: number;
              };
            };
            designation: string;
            details: string;
            buttonsTitle?: string;
            buttons?: Array<{
              link: any;
              title: string;
            }>;
            socialMedia: Array<{
              icon: {
                sourceUrl: string;
                mediaDetails: {
                  height: number;
                  width: number;
                };
              };
              link: any;
            }>;
            description: string;
          };
        };
      };
    }>;
  };
}

interface TeamPageType {
  page: {
    title: string;
    acf: {
      title: string;
      description: string;
    };
  };
}
