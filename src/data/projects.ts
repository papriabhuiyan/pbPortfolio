import aiApp from '../assets/ai-app.png';
import performHere from '../assets/perform-here-landing.png';
import pixelgram from '../assets/pixelgram.png';
import aiShirt from '../assets/ai-shirt.png';
import linearRegression from '../assets/lin-reg-model.png';

export const projects = [
  {
    title: "Perform Here",
    description: "A responsive web-based application that enables artists to gauge local concert interest by collecting deposites from individuals interested in potential concert events",
    image: performHere,
    technologies: ["HTML", "CSS", "Angular", "Spring Boot", "MySQL", "AWS", "Stripe"],
    github: "https://github.com/papriabhuiyan/Perform-Here-App",
    demo: null
  },
  {
    title: "Pixelgram",
    description: "A responsive instagram clone, social media web app that allows users to interact with each other by following each other, posting pictures and viewing, liking, and commenting on posts",
    image: pixelgram,
    technologies: ["HTML", "CSS", "Angular", "Spring Boot", "MySQL", "AWS"],
    github: "https://github.com/papriabhuiyan/Pixelgram",
    demo: null
  },
  {
    title: "AI Article Summarizer",
    description: "A responsive web application that allows users to input an article link and generates a summary of the article's content",
    image: aiApp,
    technologies: ["HTML", "CSS", "React", "RapidAPI", "OpenAI API"],
    github: "https://github.com/papriabhuiyan/AI-Article-Summarizer/",
    demo: null
  },
  {
    title: "AI Shirt Customizer",
    description: "A responsive web app that allows the user to customize their shirt by changing the color of the shirt, adding different logos and prints on the shirt by using DALL.E",
    image: aiShirt,
    technologies: ["React", "HTML", "CSS", "OpenAI API"],
    github: "https://github.com/papriabhuiyan/3D-product",
    demo: null
  },
  {
    title: "Housing Data Analysis",
    description: "A program that creates a Linear Regression Model to predict the price per sqft for the a large scale housing dataset",
    image: linearRegression,
    technologies: ["Python"],
    github: "https://github.com/papriabhuiyan/LinearRegressionModel",
    demo: null
  }
];