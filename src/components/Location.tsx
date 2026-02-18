import "../styles/location.css";

const Location = () => {
  return (
    <section id="ubicacion" className="location-section">
      <div className="decorative-shape"></div>
      <h1>Nuestra Ubicación</h1>

      <div className="location-container">
        <iframe
          src="https://maps.google.com/maps?q=3.477935602412148,-76.51663974537266&t=h&z=18&ie=UTF8&iwloc=B&output=embed"
          loading="lazy"
          allow="geolocation"
        ></iframe>
      </div>

      <div className="location-info">
      </div>
    </section>
  );
};

export default Location;
