import { useEffect, useState } from "react";

import HomeScreen from "./homeScreen";
import ContactScreen from "./contactScreen";
import ProjectsScreen from "./projectsScreen";
import Workscreen from "./workScreen";

function LandingScreen() {
  const [screenSelected, setScreenSelected] = useState<string>("home");
  const [landingFinished, setLandingFinished] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLandingFinished(true);
    }, 4000);
  }, []);

  const handleScreenSelected = (selectedScreen: string): void => {
    setScreenSelected(selectedScreen);
  };

  const pageSelected = () => {
    switch (screenSelected) {
      case "home":
        return <HomeScreen />;
      case "projects":
        return <ProjectsScreen />;
      case "work":
        return <Workscreen />;
      case "contact":
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const LandingTitle = () => {
    return (
      <div className={`h-full flex flex-col justify-center animate-fade-in`}>
        {/* <p className="text-4xl">Welcome</p> */}
        <p className="text-2xl">My name is Alain Mondely</p>
        <p className="text-4xl">I'm a Front-End Developer</p>
      </div>
    );
  };

  const LandingHome = () => {
    return (
      <>
        <div className="space-y-8 max-w-fit h-2/6 animate-fade-in">
          <div>
            <p className="text-2xl">Alain Mondely</p>
            <p className="">Front-End Developer</p>
          </div>
          <div>
            <ul className="w-fit p-0">
              <li
                className={`[text-l cursor-pointer hover:underline] ${
                  screenSelected === "home" ? "underline font-semibold" : ""
                }`}
                onClick={() => handleScreenSelected("home")}
              >
                Home
              </li>
              <li
                className={`[text-l cursor-pointer hover:underline] ${
                  screenSelected === "projects" ? "underline font-semibold" : ""
                }`}
                onClick={() => handleScreenSelected("projects")}
              >
                Projects
              </li>
              <li
                className={`[text-l cursor-pointer hover:underline] ${
                  screenSelected === "work" ? "underline font-semibold" : ""
                }`}
                onClick={() => handleScreenSelected("work")}
              >
                Work
              </li>
              <li
                className={`[text-l cursor-pointer hover:underline] ${
                  screenSelected === "contact" ? "underline font-semibold" : ""
                }`}
                onClick={() => handleScreenSelected("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="h-4/6">{pageSelected()}</div>
      </>
    );
  };

  return (
    <div className="shadow-2xl overflow-hidden h-full">
      <div className="p-10 border border-white rounded-2xl shadow-2xl h-full">
        {landingFinished ? <LandingHome /> : <LandingTitle />}
      </div>
    </div>
  );
}

export default LandingScreen;
