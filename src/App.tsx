import * as React from "react";
import { Gallery, Footer, Article } from "./components";
import { articleImages, heroImage, catSectionParagraph, dogSectionParagraph } from "./constants";

const App = () => {
  return (
    <>
      <div className="bg-primary-400 text-black pb-16">
        <img src={heroImage} alt="Header Image" className="w-full" />;
        <div className="container min-h-screen ">
          <h1 className="title">Daily pet facts - Love!</h1>
          <main className="space-y-24 md:space-y-32">
            <Article img={articleImages.cat} imgAlt="Image of a cat" title="The cat">
              {catSectionParagraph}
            </Article>
            <Article img={articleImages.dog} imgAlt="Image of a dog" title="The dog" flexDirection="flex-row-reverse">
              {dogSectionParagraph}
            </Article>
          </main>
        </div>
      </div>
      <h2 className="title mb-2">Gallery</h2>
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
