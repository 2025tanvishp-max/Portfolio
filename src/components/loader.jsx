import { motion, AnimatePresence } from "framer-motion"
import "../styles/loader.css"

import unitedLogo from "../assets/united-logo.png"

function Loader({ loading }) {

  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          className="loader"

          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.05,
          }}

          transition={{
            duration: 1.2,
            ease: [0.22,1,0.36,1],
          }}
        >

          <div className="loader-noise"></div>

          <motion.div
            className="loader-content"

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
              ease: [0.22,1,0.36,1],
            }}
          >

            <motion.img
              src={unitedLogo}
              alt=""
              className="loader-logo"

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.p
              className="loader-text"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.8,
                duration: 1,
              }}
            >
              Where interfaces become experiences.
            </motion.p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}

export default Loader