import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import Layout from "@/components/layout";
import HeroSection from "@/components/our-team/[team_id]/HeroSection";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

import React from "react";

// export async function generateStaticParams() {
//   const data: TeamsType = await getPageContent("teams");

//   return data.teams.edges.map((post) => ({
//     team_id: post.node.slug,
//   }));
// }

const page = async ({ params }: any) => {
  const teams: TeamsType = await getPageContent("teams");
  const data = teams.teams.edges.filter(
    (item) => item.node.slug === params.team_id
  )[0];

  const index = teams.teams.edges.findIndex(
    (item) => item.node.slug === params.team_id
  );

  const buttons = [
    {
      title: "Prev",
      link:
        index === 0
          ? ""
          : `/our-team/${teams.teams.edges[index - 1].node.slug}`,
    },
    {
      title: "Next",
      link:
        index === teams.teams.edges.length - 1
          ? ""
          : `/our-team/${teams.teams.edges[index + 1].node.slug}`,
    },
  ];
  return (
    <Layout>
      <HeroSection
        heroSectionImage={data.node.acf.teamMemberDetails.image.sourceUrl}
        title={data.node.acf.teamMemberDetails.name}
        description={descriptionExtractor(
          data.node.acf.teamMemberDetails.description
        )}
        position={data.node.acf.teamMemberDetails.designation}
      />

      <NavigationBtns buttons={buttons} />
    </Layout>
  );
};

export default page;
