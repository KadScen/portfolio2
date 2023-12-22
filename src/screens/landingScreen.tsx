import ContactButtons from "../components/contactButtons";
import ContactForm from "../components/contactForm";
import ProjectsLinks from "../components/projectsLinks";

function LandingScreen() {
  return (
    <div className="">
      <div className="flex flex-col items-center space-y-8">
        <p className="font-mono text-2xl">I'm Alain Mondely</p>
        <p className="font-mono text-2xl">Front-End Developer</p>
        <p className="font-mono text-xl text-center">
          I'm a front-end developer who loves making websites look cool and work
          smoothly. I worked with Javascript, Typescript, React and NextJs... so
          far. Let's create awesome stuff together!
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <ProjectsLinks />
      </div>
      <div className="flex justify-center mt-8">
        <ContactForm />
      </div>
      <div className="flex justify-end mt-8">
        <ContactButtons />
      </div>
    </div>
  );
}

export default LandingScreen;
