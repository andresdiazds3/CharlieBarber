import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css"

const WhatsAppButton = () => {
  const phoneNumber = "573123177113"; // tu número con código país
  const message = "Hola, quiero información sobre sus servicios";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
