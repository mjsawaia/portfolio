const About = () => {
  return (
    <section className="container mx-auto my-20" id="about">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap gap-6">
        <div class="card p-3">
          <div class="card-body">
            <h2 class="card-title">My Journey</h2>
            <p>
              Discovering the world of web development started as a hobby and
              quickly grew into a passion. From covering the basics of HTML,
              CSS, and JavaScript and diving into libraries such as React,
              Express, and Tailwind, I continue to enjoy every setp along the
              way.
            </p>
          </div>
        </div>
        <div class="card p-3">
          <div class="card-body">
            <h2 class="card-title">What's Next</h2>
            <p>
              I am excited to apply my skills in a valuable way and build a
              fulfilling career in tech. I am always taking on fun projects to
              help me learn new skills. Keep an eye out above for more projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
