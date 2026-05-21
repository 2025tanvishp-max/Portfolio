import "../styles/work.css"
import { motion } from "framer-motion"

function Work() {

  const stack = [
    "React",
    "JavaScript",
    "Framer Motion",
    "Vite",
    "CSS",
    "Tailwind",
    "Git",
    "Figma",
  ]

  const timeline = [
    {
      year: "2026",
      title: "Frontend Development",
      subtitle: "Independent Projects & UI Exploration",
      description:
        "Focused on cinematic interfaces, immersive interactions and expressive motion systems.",
    },

    {
      year: "2025",
      title: "UI Motion Exploration",
      subtitle: "Framer Motion & Interaction Design",
      description:
        "Experimented with tactile transitions, layered layouts and modern animation principles.",
    },

    {
      year: "2024",
      title: "Started Frontend Development",
      subtitle: "HTML • CSS • JavaScript",
      description:
        "Began building responsive interfaces and learning the foundations of frontend architecture.",
    },
  ]

  return (

    <section className="work-page">

      {/* AMBIENT */}

      <div className="work-gradient work-gradient-1"></div>
      <div className="work-gradient work-gradient-2"></div>

      {/* HERO */}

      <motion.section
        className="work-hero"

        initial={{
          opacity: 0,
          y: 50,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}
      >

        <div className="work-topline">
          WORK & EXPERIENCE
        </div>

        <div className="hero-layout">

          <div className="hero-left">

            <h1 className="hero-title">
              Interfaces
              <br />
              with rhythm.
            </h1>

          </div>

          <div className="hero-right">

            <p className="hero-description">

              I design and build cinematic frontend
              experiences focused on motion,
              atmosphere and interaction.

            </p>

            <div className="mini-note">
              tactile systems
            </div>

          </div>

        </div>

      </motion.section>

      {/* FEATURE PANEL */}

      <motion.section
        className="feature-panel"

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="feature-left">

          <span className="feature-tag">
            CURRENT DIRECTION
          </span>

          <h2>
            Building interfaces that feel
            emotional, immersive and alive.
          </h2>

        </div>

        <div className="feature-right">

          <p>

            My focus is blending motion,
            minimalism and interaction design
            into experiences that feel intentional
            instead of mechanical.

          </p>

          <p>

            Every transition, hover and layout
            choice is treated like part of a visual narrative.

          </p>

        </div>

      </motion.section>

      {/* TIMELINE */}

      <section className="timeline-section">

        <div className="section-label">
          JOURNEY
        </div>

        {timeline.map((item, index) => (

          <motion.div
            className="timeline-card"
            key={index}

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}

            viewport={{
              once: true,
            }}
          >

            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-content">

              <h3>
                {item.title}
              </h3>

              <span>
                {item.subtitle}
              </span>

              <p>
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </section>

      {/* STACK */}

      <motion.section
        className="stack-section"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="section-label">
          STACK
        </div>

        <div className="stack-grid">

          {stack.map((tech, index) => (

            <motion.div
              key={index}
              className="stack-card"

              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >

              <span>
                {tech}
              </span>

            </motion.div>

          ))}

        </div>

      </motion.section>

      {/* BIG STATEMENT */}

      <motion.section
        className="statement-section"

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{
          once: true,
        }}
      >

        <p>
          Modern interfaces should feel
          tactile, cinematic and remembered —
          not just usable.
        </p>

      </motion.section>

      {/* EXPLORING */}

      <motion.section
        className="exploring-section"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{
          once: true,
        }}
      >

        <div className="section-label">
          CURRENTLY EXPLORING
        </div>

        <div className="exploring-list">

          <span>motion-driven UI systems</span>
          <span>immersive interactions</span>
          <span>cinematic web experiences</span>
          <span>editorial layouts</span>
          <span>creative frontend engineering</span>

        </div>

      </motion.section>

    </section>

  )
}

export default Work