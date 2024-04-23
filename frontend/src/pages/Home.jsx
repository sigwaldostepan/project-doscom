import React from "react";
import HeroContent from "../components/HeroContainer";

const Home = () => {
  return (
    <>
      <main>
        <div className="min-h-screen">
          <div className="hero min-h-screen flex flex-col items-center gap-12 justify-center">
            <HeroContent
              img={
                "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              }
              title={"Sapiderman"}
              description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque quos error! Odio dicta odit tenetur cupiditate magni obcaecati esse error nam! Sint quae ea iure tempore debitis harum quod!`}
            />
            <HeroContent
              img={
                "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/136/2024/01/14/el-clasico-1-2592135221.jpg"
              }
              title={"Sapiderman"}
              description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione doloremque quos error! Odio dicta odit tenetur cupiditate magni obcaecati esse error nam! Sint quae ea iure tempore debitis harum quod!`}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
