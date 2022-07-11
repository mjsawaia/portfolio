import { projectData } from "../constants";

const Projects = () => {
  return (
    <section className="container mx-auto my-20 lg:mb-40" id="projects">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="divider"></div>
      <div className="flex flex-wrap justify-evenly">
        {projectData.map((project) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
              <figure>
                <img src={project.image} alt="project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-center mt-2">
                  {project.tags.map((tag) => (
                    <div className="badge badge-outline">{tag}</div>
                  ))}
                </div>
                <div className="divider my-2"></div>
                <div className="card-actions justify-evenly">
                  <a
                    className="btn btn-primary"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer">
                    Code
                  </a>
                  <a
                    className="btn btn-primary"
                    href={project.visit}
                    target="_blank"
                    rel="noreferrer">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
