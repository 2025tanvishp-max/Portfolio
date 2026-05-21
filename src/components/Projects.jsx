import "../styles/projects.css"
import { motion } from "framer-motion"

import flashcardPoster from "../assets/flashcard-poster.png"
import vinylImg from "../assets/vinyl-fire.jpg"
import cosmicImg from "../assets/cosmic.jpg"
import htmlImg from "../assets/html-hidden.jpg"
import sumImg from "../assets/sum-day.jpg"

const projects = [

  {
    number: "2026",
    left: "LEARN WITH",
    right: "FLASHCARDS",

    description:
      "Interactive flashcard experience with smooth motion, progress tracking and immersive UI interactions.",

    image: flashcardPoster,
  },

  {
    number: "2026",
    left: "VINYL",
    right: "ARCHIVE",

    description:
      "A cinematic vinyl experience with sliding records, motion-based interactions and immersive audio visuals.",

    image: vinylImg,
  },

  {
    number: "2025",
    left: "COSMIC",
    right: "KEYWORD",

    description:
      "A visual keyword exploration project inspired by futuristic search experiences and abstract interfaces.",

    image: cosmicImg,
  },

  {
    number: "2025",
    left: "POWER OF",
    right: "HTML",

    description:
      "Exploring hidden and underrated HTML capabilities through experimental frontend concepts.",

    image: htmlImg,
  },

  {
    number: "2025",
    left: "SUM OF",
    right: "YOUR DAY",

    description:
      "A mood and productivity tracker focused on daily reflections, emotions and personal insights.",

    image: sumImg,
  },

]

function ProjectsPage() {

  return (

    <section className="projects">

      {projects.map((project, index) => (

        <motion.div
          className="project-item"
          key={index}

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <span className="project-number">
            {project.number}
          </span>

          <div className="project-row">

            <h2 className="project-title left-word">
              {project.left}
            </h2>

            <div className="image-wrapper">

              <img
                src={project.image}
                alt={project.left}
                className="hover-image"
              />

            </div>

            <h2 className="project-title right-word">
              {project.right}
            </h2>

          </div>

          <div className="project-description-wrapper">

            <p className="project-description">
              {project.description}
            </p>

            <span className="project-arrow">
              ↗
            </span>

          </div>

        </motion.div>

      ))}

    </section>
  )
}

export default ProjectsPage