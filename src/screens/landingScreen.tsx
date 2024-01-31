import { useState } from "react";

import HomeScreen from "./homeScreen";
import ContactScreen from "./contactScreen";
import ProjectsScreen from "./projectsScreen";
import Workscreen from "./workScreen";

function LandingScreen() {
  const [screenSelected, setScreenSelected] = useState<string>("home");

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

  return (
    <div className="min-h-screen">
      <div className="p-10 border border-white rounded-2xl h-full shadow-2xl">
        <div className="space-y-8 max-w-fit">
          <div>
            <p className="text-2xl">Alain Mondely</p>
            <p className="">Front-End Developer</p>
          </div>
          <div>
            <ul className="w-fit">
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
        <div className="h-[640px]">{pageSelected()}</div>
      </div>
    </div>
  );
}

export default LandingScreen;
