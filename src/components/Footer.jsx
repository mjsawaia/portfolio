import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="navbar bg-base-100 container mx-auto flex justify-center">
      <ul className="flex">
        <li>
          <a className="btn btn-ghost normal-case text-2xl" href="#top">
            MITCH
          </a>
        </li>
        <li>
          <p className="text-2xl mx-2">&bull;</p>
        </li>
        <li>
          <a
            className="btn btn-ghost text-2xl"
            href="https://github.com/mjsawaia"
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
          <a
            className="btn btn-ghost text-2xl"
            href="https://www.linkedin.com/in/mitchell-sawaia-17258151/"
            target="blank"
            rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
