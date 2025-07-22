import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import the hook

function ContactPage() {
  const navigate = useNavigate(); // 2. Get the navigate function
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with message:", message);
    alert("Thank you for your message! We will get back to you soon.");

    // 3. Programmatically navigate the user back to the home page.
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Please fill out the form below.</p>
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
