import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with message:", message);
    alert("Thank you for your message! Redirecting you to the home page.");
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default ContactPage;
