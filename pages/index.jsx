import Hero from "../components/hero";
import Quotes from "../components/quotes";
import ProjectGrid from "../components/projectGrid";
import { getReposFlat, repoUrls } from "../utils/query";

export const getStaticProps = async (context) => {
  const repos = await getReposFlat(repoUrls);
  return {
    props: {
      repos: repos,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 120 seconds
    revalidate: 120, // In seconds
  };
};

export default function Home({ repos }) {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <ProjectGrid repos={repos} />
        <Quotes />
      </div>
    </div>
  );
}
