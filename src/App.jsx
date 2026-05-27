import { Routes, Route } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import Cursor from "./components/cursor"
import Navbar from "./components/Navbar"
import Loader from "./components/loader"

import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import ProjectsPage from "./pages/ProjectsPage"
import Contacts from "./pages/Contacts"

import miaSebTheme from "./assets/audio/mia-seb-theme.mp3"

function App() {

  /* LOADER */

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])


  /* GLOBAL AUDIO */

  const audioRef = useRef(null)

  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    if(audioRef.current){
      audioRef.current.volume = 0.4
    }

  }, [])

  const handleDeckClick = () => {

    if(!playing){

      setLoaded(true)

      setTimeout(() => {

        if(audioRef.current.currentTime === 0){
          audioRef.current.currentTime = 18
        }

        audioRef.current.play()

        setPlaying(true)

      }, loaded ? 0 : 850)

    } else {

      audioRef.current.pause()

      setPlaying(false)

    }

  }

  if (loading) {
    return <Loader loading={loading} />
  }

  return (
    <>
      <Cursor />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              loaded={loaded}
              playing={playing}
              handleDeckClick={handleDeckClick}
              audioRef={audioRef}
            />
          }
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route
          path="/contact"
          element={<Contacts />}
        />

      </Routes>

      <audio
        ref={audioRef}
        src={miaSebTheme}
        loop
      />

    </>
  )
}

export default App
