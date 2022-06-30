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
    visit: "https://github-finder-blush-nine.vercel.app/",
  },
  {
    title: "House Marketplace",
    description:
      "A mobile first web app for practice with React and Firebase. Users are authenticated, can add listings for homes and edit their listings on the profile page.",
    image: houseMarketplaceImage,
    tags: ["React.js", "Firebase"],
    source: "https://github.com/mjsawaia/house-marketplace",
    visit: "https://house-marketplace-two-chi.vercel.app/",
  },
];
