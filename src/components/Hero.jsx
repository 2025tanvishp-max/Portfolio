import "../styles/hero.css"

function Hero({
  loaded,
  playing,
  handleDeckClick,
  audioRef,
}) {

  return (

    <section className="hero">

      <div className="hero-left">

        <p className="hero-label">
          FRONTEND DEVELOPER
        </p>

        <h1 className="hero-title">
          Crafting immersive
          <br />
          digital experiences.
        </h1>

        <p className="hero-description">
          Frontend developer focused on elegant interfaces,
          cinematic motion, and modern web experiences.
        </p>

      </div>

      <div className="hero-right">

        <div
          className={`player-deck ${loaded ? "loaded" : ""}`}
          onClick={handleDeckClick}
        >

          <div className="platter"></div>

          <div className="tonearm">
            <div className="tonearm-base"></div>
          </div>

          <div className={`vinyl-container ${playing ? "spinning" : ""}`}>

            <div className="vinyl-disc">

              <div className="vinyl-sheen"></div>

              <div className="center-label">

                <span>
                  NEEDLE & NOISE
                </span>

                <small>
                  Stereo A
                </small>

                <div className="spindle-hole"></div>

              </div>

            </div>

          </div>

          <div className="controls-hud">

            <div className="volume-container">

              <span className="volume-icon">
                VOL
              </span>

              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                defaultValue="0.4"

                onChange={(e) => {
                  audioRef.current.volume = e.target.value
                }}
              />

            </div>

            <div
              className={`equalizer-wave ${
                playing ? "spinning-active" : ""
              }`}
            >

              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>
              <div className="eq-bar"></div>

            </div>

          </div>

          <div className="status-ui">

            {playing ? (
              <>
                <span className="status-now">
                  NOW PLAYING :
                </span>

                <span className="status-track">
                     Mia and Sebastian's theme - La La Land OST
                </span>
              </>
            ) : (
              <>
                <span className="status-now">
                  READY TO PLAY :
                </span>

                <span className="status-track">
                   Click vinyl to start
                </span>
              </>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero