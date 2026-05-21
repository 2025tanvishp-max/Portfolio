import "../styles/contacts.css"
import { motion } from "framer-motion"

function Contacts() {

  const contacts = [

    {
      label: "INSTAGRAM",
      value: "@weeping_anakin",
      link: "https://www.instagram.com/weeping_anakin/",
      number: "01",
    },

    {
      label: "GITHUB",
      value: "2025tanvishp-max",
      link: "https://github.com/2025tanvishp-max",
      number: "02",
    },

    {
      label: "EMAIL",
      value: "2025.tanvishp@isu.ac.in",
      link: "mailto:2025.tanvishp@isu.ac.in",
      number: "03",
    },

  ]

  return (

    <section className="contact-page">

      {/* AMBIENT GLOW */}

      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      {/* HERO */}

      <motion.section
        className="contact-hero"

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}
      >

        <div className="contact-label">
          CONTACT
        </div>

        <div className="contact-hero-grid">

          <div className="contact-left">

            <h1 className="contact-title">

              Let’s create
              <br />
              something
              <br />
              unforgettable.

            </h1>

          </div>

          <div className="contact-right">

            <p>

              Whether it’s frontend development,
              cinematic UI concepts, collaborations
              or just a conversation about design,
              music and visual storytelling —

              <span className="contact-highlight">
                {" "}my inbox is always open.
              </span>

            </p>

          </div>

        </div>

      </motion.section>

      {/* CONTACT CARDS */}

      <section className="contact-links">

        {contacts.map((item, index) => (

          <motion.a
            href={item.link}
            target="_blank"
            rel="noreferrer"

            key={index}

            className="contact-card"

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
              delay: index * 0.15,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -12,
            }}
          >

            <div className="contact-card-top">

              <span className="contact-number">
                {item.number}
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </div>

            <div className="contact-card-content">

              <span className="contact-type">
                {item.label}
              </span>

              <h2>
                {item.value}
              </h2>

            </div>

          </motion.a>

        ))}

      </section>

      {/* MASSIVE STATEMENT */}

      <motion.section
        className="contact-statement"

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

        <p>
          good design
          <br />
          should feel
          <br />
          like music.
        </p>

      </motion.section>

      {/* FOOTER NOTE */}

      <motion.section
        className="contact-footer"

        initial={{
          opacity: 0,
          y: 30,
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

        <span>
          based somewhere between cinema,
          code and late night playlists.
        </span>

      </motion.section>

    </section>

  )
}

export default Contacts