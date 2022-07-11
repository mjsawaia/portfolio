import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <nav
      className="navbar bg-base-100 container mx-auto flex justify-between"
      id="top">
      <button className="btn btn-ghost normal-case text-2xl">MITCH</button>

      <ul className="flex-col md:flex-row">
        <li>
          <a className="btn btn-ghost" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="btn btn-ghost" href="#technologies">
            Technologies
          </a>
        </li>
        <li>
          <a className="btn btn-ghost" href="#about">
            About
          </a>
        </li>
      </ul>

      <ul className="flex">
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
    </nav>
  );
};

export default Header;
