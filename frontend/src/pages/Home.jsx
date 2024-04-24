import HeroContent from "../components/HeroContainer";
import { useLocation } from "react-router-dom";
import useFetchPosts from "../features/posts/useFetchPosts";

const Home = () => {
  const tags = useLocation().search;
  const { data: posts, isLoading, refetch } = useFetchPosts(tags);

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
