import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-img">
          <img src="/hero-img.jpg" alt="" />
        </div>

        <div className="hero-mask"></div>

        <div className="hero-grid-overlay">
          <img src="/grid-overlay.svg" alt="" />
        </div>

        <div className="marker marker-1">
          <span className="marker-icon"></span>
          <p className="marker-label">Anchor Field</p>
        </div>

        <div className="marker marker-1">
          <span className="marker-icon"></span>
          <p className="marker-label">Drift Field</p>
        </div>

        <div className="hero-content">
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h1>Location Framework</h1>
            </div>
          </div>

          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h1>Coordinate Mapping</h1>
              <p>
                Terrain data is interpreted through directional vectors.
                Movement responds to relative position rather than absolute distance.
              </p>
            </div>
          </div>

          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h1>Active Location</h1>
              <p>
                Key points are indexed within the field. 
                Each location functions as a reference for spatial alignment and transition logic.
              </p>
            </div>
          </div>
          
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h1>Spatial Center</h1>
              <p>
                The system converges toward a balanced focal region.
                Motion decelerates as positional variance reaches equilibrium.
              </p>
            </div>
          </div>
        </div>

      <div className="hero-scroll-progress-bar"></div>
      </section>
      <section className="outro">
        <p>The system has reached its final spatial state</p>
      </section>
    </div>
  );
}