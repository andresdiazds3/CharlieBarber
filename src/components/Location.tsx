const Location = () => {
  return (
    <div className="Mapa">
      <iframe
        src="https://maps.google.com/maps?q=%20%20INTEGRAL%20BARBER%20-%20Barberia&t=h&z=15&ie=UTF8&iwloc=B&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;