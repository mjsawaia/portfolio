import mePhoto from "../asset/me.jpg";

const Hero = () => {
  return (
    <div className="hero h-fit bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse py-36">
        <img
          src={mePhoto}
          className="max-w-sm rounded-lg shadow-2xl m-5"
          alt="profile"
        />
        <div className="m-5">
          <h1 className="text-5xl font-bold">Hi, I'm Mitch</h1>
          <p className="py-6">
            A web developer with a passion for creating fun apps and learning
            new technologies.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
