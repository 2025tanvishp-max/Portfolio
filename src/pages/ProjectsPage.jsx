import "../styles/projects.css"
import { motion } from "framer-motion"

import flashcardPoster from "../assets/flashcard-poster.png"
import vinylImg from "../assets/vinyl-fire.jpg"
import cosmicImg from "../assets/cosmic.jpg"
import htmlImg from "../assets/html-hidden.jpg"
import sumImg from "../assets/sum-day.jpg"

const projects = [

  {
    left:"LEARN WITH",
    right:"FLASHCARDS",

    description:
      "Interactive flashcard experience with immersive study interactions.",

    image:flashcardPoster,
  },

  {
    left:"VINYL",
    right:"ARCHIVE",

    description:
      "A cinematic vinyl experience inspired by analog culture.",

    image:vinylImg,
  },

  {
    left:"COSMIC",
    right:"KEYWORD",

    description:
      "A keyword analyser but make it cosmic.",

    image:cosmicImg,
  },

  {
    left:"POWER OF",
    right:"HTML",

    description:
      "Exploring hidden and underrated HTML capabilities with the help of cult classic memes.",

    image:htmlImg,
  },

  {
    left:"SUM OF",
    right:"YOUR DAY",

    description:
      "A really gen-z'ish to do list.",

    image:sumImg,
  },
]

function ProjectsPage(){

  return(

    <section className="projects">

      <div className="projects-heading">
        Featured work
      </div>

      {projects.map((project,index)=>(

        <motion.div
          className="project-item"
          key={index}

          initial={{
            opacity:0,
            y:60,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:.8,
          }}

          viewport={{
            once:true,
          }}
        >

          <div className="project-row">

            <h2 className="project-title left-title">
              {project.left}
            </h2>

            <div className="image-wrapper">

              <img
                src={project.image}
                alt=""
                className="hover-image"
              />

            </div>

            <h2 className="project-title right-title">
              {project.right}
            </h2>

            <div className="project-description-wrapper">

              <p className="project-description">
                {project.description}
              </p>

            </div>

          </div>

        </motion.div>

      ))}

    </section>
  )
}

export default ProjectsPage