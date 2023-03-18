import React from "react";
import { Gallery, Footer, Article, Contact, CookieBanner } from "./components";
import { ARTICLE_IMAGES, HERO_IMAGE, CAT_PARAGRAPH, DOG_PARAGRAPH } from "./constants";

const App = () => {
  return (
    <>
      <div className="bg-primary-400 text-black pb-16">
        <img src={HERO_IMAGE} alt="Header Image" className="w-full" />;
        <div className="container min-h-screen ">
          <h1 className="title">Daily pet facts - Love!</h1>
          <main className="space-y-24 md:space-y-32">
            <Article img={ARTICLE_IMAGES.cat} imgAlt="Image of a cat" title="The cat">
              {CAT_PARAGRAPH}
            </Article>
            <Article img={ARTICLE_IMAGES.dog} imgAlt="Image of a dog" title="The dog" flexDirection="flex-row-reverse">
              {DOG_PARAGRAPH}
            </Article>
          </main>
        </div>
      </div>
      <h2 className="title mb-2">Gallery</h2>
      <Gallery />
      <Contact />
      <Footer />
      <CookieBanner />
    </>
  );
};

export default App;
