import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import RecentBlogs from "@/components/blog/[blog_id]/RecentBlogs";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";
import Link from "next/link";

const page = async ({ params }: any) => {
  const blogs: BlogsType = await getPageContent("blogs");
  const data = blogs.blogs.edges.filter(
    (item) => item.node.slug === params.blog_id
  )[0];

  const index = blogs.blogs.edges.findIndex(
    (item) => item.node.slug === params.blog_id
  );

  const buttons = [
    {
      title: "Prev",
      link:
        index === 0 ? "" : `/blog/${blogs.blogs.edges[index - 1].node.slug}`,
    },
    {
      title: "Next",
      link:
        index === blogs.blogs.edges.length - 1
          ? ""
          : `/blog/${blogs.blogs.edges[index + 1].node.slug}`,
    },
  ];

  const date = new Date(data.node.date);
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Layout>
      <HeroSection
        heroSectionImage={data.node.acf.bannerImage.sourceUrl}
        author={
          <>
            {formattedDate} - Blog - By&nbsp;
            <Link href={`/author/${data.node.author.node.slug}`} shallow className="capitalize">
              {data.node.author.node.name}
            </Link>
          </>
        }
        title={data.node.acf.title}
      />
      <SectionWrapper
        classBottom={`md:gap-20 gap-10 max-md:flex-col md:justify-between  ${main_padding.b}`}
        classTop="justify-start "
      >
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className=" text-lg leading-[190%] md:max-w-[70%]"
        >
          {descriptionExtractor(data.node.acf.content)}
        </p>

        <RecentBlogs data={blogs} />
      </SectionWrapper>

      <NavigationBtns buttons={buttons} />
    </Layout>
  );
};

export default page;
