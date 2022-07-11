import mePhoto from "../asset/me.jpg";

const Hero = () => {
  return (
    <div className="hero h-fit bg-base-100">
      <div className="hero-content flex-col lg:flex-row py-36">
        <img
          src={mePhoto}
          className="max-w-sm rounded-lg shadow-2xl m-5"
          alt="profile"
        />
        <div className="m-5">
          <h1 className="text-5xl font-bold">Hi, I'm Mitch.</h1>
          <p className="py-6">
            A web developer with a passion for creating fun apps and learning
            new technologies
          </p>
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1Zw9M5qlZ9uLvNejWFZ6dcngSomGWfbhW/view?usp=sharing">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
