import "../styles/about.css"
import { motion } from "framer-motion"

function About() {

  return (

    <section className="about-page">

      {/* AMBIENT LIGHTS */}

      <div className="ambient ambient-1"></div>
      <div className="ambient ambient-2"></div>

      {/* HERO */}

      <motion.div
        className="about-hero"

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div className="tiny-intro">
          ABOUT ME
        </div>

        <div className="hero-grid">

          {/* LEFT */}

          <div className="hero-left">

            <h1 className="about-title">
              Tanvish
            </h1>

            <div className="title-line"></div>

            <p className="hero-subtext">

              19 years old.
              <br />

              Frontend developer crafting
              cinematic digital experiences.

            </p>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <p className="hero-description top-text">

              I’m deeply interested in interfaces
              that feel atmospheric, tactile and alive.

            </p>

            {/* CENTER GLOW TEXT */}

            <div className="feast-wrapper">

              <p className="feast-line">
                Feast
                <br />
                your
                <br />
                eyes.
              </p>

            </div>

            <p className="hero-description bottom-text">

              The intersection between motion,
              music, visual storytelling and minimalism
              is where I feel most at home.

            </p>

          </div>

        </div>

      </motion.div>

      {/* PHILOSOPHY */}

      <motion.div
        className="content-section"

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

        <div className="section-top">

          <span className="section-number">
            01
          </span>

          <span className="section-label">
            PHILOSOPHY
          </span>

        </div>

        <div className="content-grid">

          <h2 className="big-statement">

            More than building websites,
            I care about building feeling.

          </h2>

          <p className="section-paragraph">

            My approach blends minimalism,
            cinematic pacing and tactile motion.

            <br />
            <br />

            I enjoy crafting interfaces that feel responsive,
            intentional and memorable —
            experiences that linger even after
            the screen fades away.

          </p>

        </div>

      </motion.div>

      {/* OUTSIDE THE SCREEN */}

      <motion.div
        className="content-section"

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

        <div className="section-top">

          <span className="section-number">
            02
          </span>

          <span className="section-label">
            OUTSIDE THE SCREEN
          </span>

        </div>

        <div className="interests-layout">

          <div className="interest-card">
            vinyl culture
          </div>

          <div className="interest-card">
            cinema
          </div>

          <div className="interest-card">
            ambient music
          </div>

          <div className="interest-card">
            editorial design
          </div>

          <div className="interest-card">
            fashion visuals
          </div>

          <div className="interest-card">
            photography
          </div>

          <div className="interest-card">
            retro aesthetics
          </div>

          <div className="interest-card">
            minimal architecture
          </div>

        </div>

      </motion.div>

      {/* CURRENTLY OBSESSED */}

      <motion.div
        className="content-section"

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

        <div className="section-top">

          <span className="section-number">
            03
          </span>

          <span className="section-label">
            CURRENTLY OBSESSED WITH
          </span>

        </div>

        <div className="obsession-wrapper">

          <span>analog textures</span>
          <span>immersive motion systems</span>
          <span>music-driven interfaces</span>
          <span>retro-futuristic visuals</span>
          <span>editorial layouts</span>

        </div>

      </motion.div>

      {/* END QUOTE */}

      <motion.div
        className="end-quote"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        transition={{
          duration: 1.2,
        }}

        viewport={{
          once: true,
        }}
      >

        Interfaces should feel remembered,
        not just used.

      </motion.div>

    </section>

  )
}

export default About