/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simple Encryption Program 🔐",
    description:
      "File Encryption - made easy. Encrypt any file with a simple right-click. Includes a Password Library to manage complicated passwords.",
    url: "https://go.jmatthews.uk/sep",
  },
  {
    title: "Risk Board Game 🎲",
    description:
      "Very basic version of the board game - Risk. Take control of enemy territories and conquer the world!",
    url: "https://go.jmatthews.uk/risk",
  },
  {
    title: "Contact Us 📋",
    description:
      "Very basic Contact Manager - Unfinished. Store emails, phone numbers, and addresses in a simple form.",
    url: "https://go.jmatthews.uk/contactus",
  },
  {
    title: "My GitHub Profile",
    description:
      "A compilation of random projects, and the home of most of what I make.",
    url: "https://go.jmatthews.uk/gh",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
