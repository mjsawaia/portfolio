const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
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
