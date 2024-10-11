import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "JavaScript", level: "Advanced", color: "green" },
  { skill: "React", level: "Intermediate", color: "blue" },
  { skill: "HTML", level: "Expert", color: "darkgreen" },
  { skill: "CSS", level: "Expert", color: "purple" },
  { skill: "Node.js", level: "Intermediate", color: "blue" },
  { skill: "Python", level: "Beginner", color: "orange" },
  { skill: "SQL", level: "Advanced", color: "green" },
  { skill: "Git", level: "Advanced", color: "green" },
  { skill: "Redux", level: "Intermediate", color: "blue" },
  { skill: "TypeScript", level: "Intermediate", color: "blue" },
  { skill: "PHP", level: "Beginner", color: "orange" },
  { skill: "Odoo", level: "Intermediate", color: "blue" },
  { skill: "Tailwind CSS", level: "Advanced", color: "green" },
  { skill: "MongoDB", level: "Intermediate", color: "blue" },
  { skill: "Docker", level: "Beginner", color: "orange" }
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="info">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/161469816?s=400&u=effb2203f95b363c639d615b996d1a1cfd91575f&v=4"
      alt="saif"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>EL HARCHAOUI SIF-EDDINE</h1>
      <p>
        Full-Stack web development student, 20 years old, living in Morocco in Khemisset.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color, padding: '10px', marginBottom: '5px' }}>
      <span>{skill}</span> 
      <span> ({level}) </span>
      <span>
        {level === "Advanced" ? "🚀" : 
         level === "Intermediate" ? "📈" : 
         level === "Expert" ? "🏆" : 
         level === "Beginner" ? "🌱" : 
         null}
      </span>
    </div>
  );
}
// Render the application to the DOM
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
