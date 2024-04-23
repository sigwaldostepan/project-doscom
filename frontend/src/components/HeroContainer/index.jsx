import React from "react";

const HeroContainer = ({ img, title, description }) => {
  return (
    <div className="hero-content max-w-[900px] flex-col gap-12 transition-all lg:flex-row hover:-translate-y-1 hover:shadow-lg even:flex-row-reverse">
      <img
        src={img}
        className="min-h-[300px] max-h-[300px] aspect-square object-cover rounded-lg shadow-3xl"
      />
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">{description}</p>
        <button className="btn btn-primary">Read more</button>
      </div>
    </div>
  );
};

export default HeroContainer;
