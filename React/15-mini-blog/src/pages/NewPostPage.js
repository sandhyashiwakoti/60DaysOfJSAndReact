import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent multiple submissions while one is in progress
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1, // Typically you'd get this from logged-in user state
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create post. The server responded with an error."
        );
      }

      // We still want to get the "fake" response from the server to log it
      const newPost = await response.json();
      console.log("Fake post created successfully:", newPost);

      // Give the user clear feedback about what happened
      alert(
        "Post submitted successfully!\n(Note: This is a fake API, so the new post will not be saved permanently)."
      );

      // --- THIS IS THE CORRECTED PART ---
      // Instead of navigating to a page that will 404, we navigate back to the home page.
      navigate("/");
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        error.message || "An unexpected error occurred while creating the post."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting} // Disable input during submission
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            disabled={isSubmitting} // Disable textarea during submission
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default NewPostPage;
