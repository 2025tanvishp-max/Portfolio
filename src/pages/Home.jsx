import Hero from "../components/Hero"

function Home({
  loaded,
  playing,
  handleDeckClick,
  audioRef,
}) {

  return (
    <>
      <Hero
        loaded={loaded}
        playing={playing}
        handleDeckClick={handleDeckClick}
        audioRef={audioRef}
      />
    </>
  )
}

export default Home