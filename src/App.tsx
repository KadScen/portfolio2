// import LandingScreen from "./screens/landingScreen";
import ButtonsRadio from "./components/buttonsRadio";
import ContactForm from "./components/contactForm";
import Project from "./components/project";
import ProjectsLinks from "./components/projectsLinks";
import WorkExperienceRadioCards from "./components/workExperienceRadioCards";

function App() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center py-3 space-y-10">
        <div className="flex flex-col items-center text-center border-y-2 border-neutral-950 w-3/5 py-3">
          <h1>Portfolio</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="flex flex-col items-center text-center w-2/5 py-3 space-y-2">
          <p>
            HTML, CSS, Tailwind, Styled Components, JavaScript and TypeScript.
          </p>
          <p>Frameworks: React, React Native, NextJs.</p>
          <p>Over 4 years of experience in Marketing and Graphic Design.</p>
          <p>
            2 years of experience in marketing communication and advertisement.
          </p>
        </div>
        <div className=" flex items-center w-3/5 border-y border-neutral-950 bg-slate-100 h-10">
          <div className="flex justify-center border-r border-neutral-950 w-2/6">
            <p>Contact</p>
          </div>
          <div className="flex justify-center w-4/6">
            <p>Experience</p>
          </div>
        </div>
        <div className=" flex w-3/5">
          <div className="border-r border-neutral-950 w-2/6">
            <p>LinkedIn: https://www.linkedin.com/in/alain-mondely-5a7b9653</p>
            <ContactForm />
          </div>
          <div className="flex flex-col items-center w-4/6">
            <WorkExperienceRadioCards />
          </div>
        </div>
        <div className=" flex justify-center items-center w-3/5 border-y border-neutral-950 bg-slate-100 h-10">
          <p>Projects</p>
        </div>
        <div>
          <ProjectsLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
