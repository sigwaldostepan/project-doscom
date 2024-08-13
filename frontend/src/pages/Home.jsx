import HeroContent from "../components/HeroContent";
import { useLocation } from "react-router-dom";
import useFetchPosts from "../features/posts/useFetchPosts";
import { useEffect } from "react";
import convertTags from "../lib/convertTags";

const Home = () => {
  const tags = useLocation().search;

  const { data: posts } = useFetchPosts(convertTags(tags));

  const renderPosts = () => {
    return posts?.data.payload.response?.map((data) => {
      return (
        <HeroContent
          key={data.id}
          link={`/post/${data.id}`}
          img={data.img}
          title={data.title}
        />
      );
    });
  };

  useEffect(() => {
    const title = convertTags(tags);
    document.title = `Glob - ${title} Articles`;
  }, [tags]);

  return (
    <>
      <main>
        <div className="min-h-screen">
          <div className="hero min-h-screen flex flex-col items-center gap-12 justify-center">
            {renderPosts()}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
