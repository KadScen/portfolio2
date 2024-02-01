import { useState } from "react";

import Project from "../components/project";
import SightseerAppGIF from "../assets/sightseer_app.gif";
import SightseerAppPNG from "../assets/sightseer_app_static.png";
import FlatmateAppScreenshot1 from "../assets/flatmate_app.png";
import FlatmateAppScreenshot2 from "../assets/flatmate_app_2.png";
import FlatmateAppScreenshot3 from "../assets/flatmate_app_3.png";
import FlatmateAppScreenshot4 from "../assets/flatmate_app_4.png";
import FlatmateAppScreenshot5 from "../assets/flatmate_app_5.png";

function ProjectsScreen() {
  const [showingProjects, setShowingProjects] = useState<string>("");

  const handleProject = (e: string) => {
    // Must hide list of project and reveal project selected
    setShowingProjects(e);
  };

  const selectedProject = () => {
    console.log("🚀 ~ selectedProject ~ showingProjects:", showingProjects);

    switch (showingProjects) {
      case "sightseer":
        return (
          <Project
            screenshotStatic={SightseerAppPNG}
            screenshotAnimated={SightseerAppGIF}
            altMessage="Sightseer app screenshots"
            projectTitle="Front-End Developer"
            projectName="Sightseer app"
            projectLink="https://sightseer.firebaseapp.com/"
            projectDescription="Sightseer is a travel app. Utilizing React, Class Components, and Bootstrap, I crafted an immersive user experience. The app seamlessly integrates Firebase for secure authentication, storage, and real-time updates through Cloud Firestore. With a visually appealing and responsive design, Sightseer goes beyond being an app—it's a sophisticated travel companion, transforming exploration into unforgettable memories."
          />
        );
      case "flatmate":
        return (
          <Project
            screenshotList={[
              FlatmateAppScreenshot1,
              FlatmateAppScreenshot2,
              FlatmateAppScreenshot3,
              FlatmateAppScreenshot4,
              FlatmateAppScreenshot5,
            ]}
            altMessage="Flatmate app screenshots"
            projectTitle="Front-End Developer"
            projectName="Flatmate app"
            projectLink="https://fir-demo-76f56.web.app/"
            projectDescription="Flatmate App is a game-changer in household chore management. As the Front-End Developer, I utilized React, Class Components, and Bootstrap to create an intuitive interface. With Firebase integration for authentication and Cloud Firestore for real-time updates, the Flatmate App offers a stress-free, passive approach to chores, promoting harmonious living among flatmates."
          />
        );

      default:
        break;
    }
  };

  return (
    <div className="h-full">
      <div
        className={`${
          showingProjects
            ? "hidden"
            : "flex flex-col justify-center items-end space-y-5 h-full"
        }`}
      >
        <div className="relative flex flex-col items-end w-80">
          <div className="absolute -top-14 -left-8 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob"></div>
          <div className="absolute -top-20 -right-4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-14 left-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-4000"></div>
          <div className="z-10">
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in"
              onClick={() => handleProject("sightseer")}
            >
              Sightseer App
            </p>
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in4"
              onClick={() => handleProject("flatmate")}
            >
              Flatmate App
            </p>
          </div>
        </div>
      </div>
      <div
        className={`[flex h-full justify-center] ${
          showingProjects ? "block" : "hidden"
        }`}
      >
        <div className="flex h-full justify-center items-center">
          {selectedProject()}
        </div>
        <div className="flex justify-end items-end">
          <p
            className="cursor-pointer hover:underline"
            onClick={() => handleProject("")}
          >
            Back &gt;
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsScreen;
