import reactLogo from "../asset/react-logo.png";
import expressLogo from "../asset/express-logo.png";
import nodeLogo from "../asset/node-logo.png";
import mongoLogo from "../asset/mongo-logo.png";

const Technologies = () => {
  return (
    <section className="container mx-auto my-20 mb-40" id="technologies">
      <h1 className="text-4xl font-bold">Technologies</h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        <div className="flex flex-col items-center">
          <img src={reactLogo} alt="react logo" className="h-60 mb-4" />
          <h2 className="text-4xl">React</h2>
        </div>
        <div className="flex flex-col items-center">
          <img src={nodeLogo} alt="node logo" className="h-60 mb-4" />
          <h2 className="text-4xl">Node</h2>
        </div>
        <div className="flex flex-col items-center">
          <img src={mongoLogo} alt="mongo logo" className="h-60 mb-4" />
          <h2 className="text-4xl">MongoDB</h2>
        </div>
        <div className="flex flex-col items-center">
          <img src={expressLogo} alt="express logo" className="h-60 mb-4" />
          <h2 className="text-4xl">Express</h2>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
