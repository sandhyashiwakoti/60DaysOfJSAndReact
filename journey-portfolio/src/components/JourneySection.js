import { forwardRef } from "react"; // 1. Import forwardRef
import styles from "./JourneySection.module.css";

const journeyData = [
  // ... (Your personalized journeyData from before remains exactly the same)
  {
    title: "Days 1-15: JavaScript Fundamentals",
    description:
      "Started from the ground up, mastering variables, data types, loops, and functions—the core building blocks of the web.",
  },
  {
    title: "Days 16-30: Advanced JavaScript",
    description:
      "Dived deeper into asynchronous JS with Promises and async/await, and learned to manipulate the DOM to make web pages interactive.",
  },
  {
    title: "Day 37: A New Chapter with React",
    description:
      "Entered the world of modern web development! Learned the component-based architecture and set up my first project with a professional toolchain.",
  },
  {
    title: "Days 38-43: Mastering React's Core",
    description:
      "Learned the fundamentals of JSX, passing data with props, and managing component memory and interactivity with the useState hook.",
  },
  {
    title: "Days 44-48: Side Effects & Advanced State",
    description:
      "Connected my apps to the real world by fetching API data with useEffect. Learned to create custom hooks and manage complex state with useReducer.",
  },
  {
    title: "Days 49-53: Building Multi-Page Applications",
    description:
      "Mastered client-side routing with React Router, creating apps with dynamic routes, nested layouts, and a professional multi-page feel.",
  },
  {
    title: "Days 54-59: The Capstone Projects",
    description:
      "Combined all my skills to build complete applications like a mini-blog, a weather app, a Pokémon search dex, and a theme switcher using the Context API.",
  },
  {
    title: "Day 60: The End of the Beginning",
    description:
      "Completed the 60-day challenge by building this portfolio to showcase my journey. Feeling confident and ready for what comes next!",
  },
];

// 2. Wrap the component in forwardRef
const JourneySection = forwardRef((props, ref) => {
  return (
    // 3. Attach the ref to the main section element
    <section ref={ref} className={styles.timeline}>
      {journeyData.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
        >
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
});

export default JourneySection;
