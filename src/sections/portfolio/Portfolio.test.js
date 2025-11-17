import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Portfolio } from "./index"; // Adjust the import path as necessary
import { HelmetProvider } from "react-helmet-async";

// Mock data directly in the test
jest.mock("../../content_option", () => ({
  dataportfolio: [
    {
      img: "img3",
      description: "I built a Website for Djs",
      link: "https://dj-jusuf.netlify.app/",
      github: "https://github.com/Sheriff702/Dj-Jusuf",
    },
    {
      img: "img10",
      description:
        "Introducing Frimark, your go-to children's clothing store! Find the best outfits for your little ones at our React-based PWA. Shop conveniently on the web, Android, and iOS platforms.",
      link: "https://zippy-parfait-feebde.netlify.app/",
      github: "https://github.com/Quantinx/childrensClothesStore",
    },
    {
      img: "img4",
      description:
        "Its a website i built for a company called Hypernetwork. The website is built with react. The website is available on Web and both android and ios.",
      link: "https://hypernetworkfed25.github.io/hypernetwork",
      github: "https://github.com/hypernetworkfed25/hypernetwork",
    },
    {
      img: "img5",
      description:
        "this is a game we developed. The game is called Hyperflapper. It's a game where you can play and compete with your friends. The game is available on Web only",
      link: "https://simon-rosengren.github.io/Group-8-Project/",
      github: "https://github.com/simon-rosengren/Group-8-Project",
    },
    {
      img: "img2",
      description:
        "Introducing The Wiggle App, your ultimate nightlife companion! Discover the hottest parties, events, clubs, and bars in your city. Available on Android and iOS.",
      link: "https://thewiggleapp.com/",
      github: "",
      description2:
        "This app i can not show you the code because it's a company project",
    },
    {
      img: "img6",
      description:
        "A little fun guessing game i built. The game is built with Javascript",
      link: "https://sheriff702.github.io/javascript/",
      github: "https://github.com/Sheriff702/javascript",
    },
    {
      img: "img7",
      description:
        "A little Tic Tac Toe game i built. The game is built with React",
      link: "https://main--tictagame.netlify.app/",
      github: "https://github.com/Sheriff702/tic-tac-toe",
    },
    {
      img: "img8",
      description: "A landing page i built with HTML and CSS",
      link: "https://main--fylooland.netlify.app/",
    },
    {
      img: "img9",
      description:
        "A Issue tracker me and my classmates built with backend. It is build in NEXT.js and the backend is build with Node.js and postgresql.",
      link: "https://issuetracker-team8.vercel.app/",
      github: "https://github.com/arixstudio/issue-tracker",
    },
    {
      img: "img11",
      description:
        "We had a project where we had to build a website for a company. The website is built with React. OBS: I can not give you the code because it's a company project",
      link: "https://group10pondeo.netlify.app/",
    },
    {
      img: "img12",
      description:
        "I'm glad to share a website we built for our course with my classmates. This website will take you through the fascinating history of space. (For the best visualisation, please use a desktop.)",
      link: "https://hyperispace.github.io/artemareon/",
    },
  ],
  meta: {
    title: "My Portfolio",
    description: "Description of my portfolio page.",
  },
}));

describe("Portfolio Component", () => {
  test("renders portfolio items", () => {
    render(
      <HelmetProvider>
        <Portfolio />
      </HelmetProvider>
    );

    // Check if the specific portfolio descriptions are rendered
    expect(screen.getByText("I built a Website for Djs")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Introducing Frimark, your go-to children's clothing store! Find the best outfits for your little ones at our React-based PWA. Shop conveniently on the web, Android, and iOS platforms."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Its a website i built for a company called Hypernetwork. The website is built with react. The website is available on Web and both android and ios."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "this is a game we developed. The game is called Hyperflapper. It's a game where you can play and compete with your friends. The game is available on Web only"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Introducing The Wiggle App, your ultimate nightlife companion! Discover the hottest parties, events, clubs, and bars in your city. Available on Android and iOS."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A little fun guessing game i built. The game is built with Javascript"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A little Tic Tac Toe game i built. The game is built with React"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("A landing page i built with HTML and CSS")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A Issue tracker me and my classmates built with backend. It is build in NEXT.js and the backend is build with Node.js and postgresql."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We had a project where we had to build a website for a company. The website is built with React. OBS: I can not give you the code because it's a company project"
      )
    ).toBeInTheDocument();

    // Use getAllByText for descriptions that appear more than once
    const spaceWebsiteDescriptions = screen.getAllByText(
      "I'm glad to share a website we built for our course with my classmates. This website will take you through the fascinating history of space. (For the best visualisation, please use a desktop.)"
    );
    expect(spaceWebsiteDescriptions.length).toBeGreaterThan(0);
  });
});
