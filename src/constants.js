import githubProjectImage from "./asset/github-finder-pic.jpg";
import houseMarketplaceImage from "./asset/house-marketplace.jpg";

export const projectData = [
  {
    title: "Github Finder",
    description:
      "A project I built to start learning React. This app uses the GitHub API to search for users and display information including public repos, gists, and followers.",
    image: githubProjectImage,
    tags: ["React.js", "Tailwind CSS"],
    source: "https://github.com/mjsawaia/github-finder",
    visit: "https://github-finder-mitch.herokuapp.com/",
  },
  {
    title: "House Marketplace",
    description:
      "A mobile first web app for practice with React and Firebase. Users are authenticated and can add listings for homes to rent or sell and edit their listings in the profile page.",
    image: houseMarketplaceImage,
    tags: ["React.js", "Firebase"],
    source: "https://github.com/mjsawaia/house-marketplace",
    visit: "https://mitch-house-marketplace.herokuapp.com/",
  },
];