// function Workscreen() {
//   return (
//     <div className="h-full flex flex-col justify-center items-end space-y-5 animate-slide-in">
//       <p className="text-2xl cursor-pointer hover:underline">
//         Cycurid Dashboard
//       </p>
//       <p className="text-2xl cursor-pointer hover:underline">Imme App</p>
//       <p className="text-2xl cursor-pointer hover:underline">Cycurid Website</p>
//       <p className="text-2xl cursor-pointer hover:underline">Imme Website</p>
//     </div>
//   );
// }

// export default Workscreen;

import { useState } from "react";

import Project from "../components/project";
import ImmeWebsiteGIF from "../assets/imme_website.gif";
import ImmeWebsitePNG from "../assets/imme_website_static.png";
import CycuridWebsiteGIF from "../assets/cycurid_website.gif";
import CycuridWebsitePNG from "../assets/cycurid_website_static.png";
import ImmeAppScreenshot1 from "../assets/imme_app_1_landscape.png";
import ImmeAppScreenshot2 from "../assets/imme_app_2_landscape.png";
import ImmeAppScreenshot3 from "../assets/imme_app_3_landscape.png";
import NDAPNG from "../assets/nda.png";

function Workscreen() {
  const [showingProjects, setShowingProjects] = useState<string>("");

  const handleProject = (e: string) => {
    // Must hide list of project and reveal project selected
    setShowingProjects(e);
  };

  const selectedProject = () => {
    console.log("🚀 ~ selectedProject ~ showingProjects:", showingProjects);

    switch (showingProjects) {
      case "cycurid-dashboard":
        return (
          <Project
            screenshotList={[NDAPNG]}
            altMessage="Cycurid dashboard screenshots"
            projectTitle="Front-End Developer"
            projectName="Cycurid dashboard website"
            projectLink=""
            projectDescription=""
          />
        );
      case "imme-app":
        return (
          <Project
            screenshotList={[
              ImmeAppScreenshot1,
              ImmeAppScreenshot2,
              ImmeAppScreenshot3,
            ]}
            altMessage="Imme app screenshots"
            projectTitle="Front-End Developer"
            projectName="Imme App"
            projectLink="https://apps.apple.com/ro/app/imme-own-your-identity/id1627097630"
            projectDescription="Imme App is a revolutionary service available on the App Store and Google Store that offers a new way to manage digital identity and personal privacy. I worked as a Front-End Developer for this app, utilizing React Native, Styled Components, private API fetches, and implementing functionalities such as 2-Factor Authentication, and QR Code reading and writing."
          />
        );

      case "cycurid-website":
        return (
          <Project
            screenshotStatic={CycuridWebsitePNG}
            screenshotAnimated={CycuridWebsiteGIF}
            altMessage="Cycurid website animated screenshot"
            projectTitle="Lead Developer"
            projectName="Cycurid Website"
            projectLink="https://cycurid.com/"
            projectDescription="
          As the Lead Developer for Cycurid's website, I utilized Next.js and Styled Components to architect a performant and visually appealing platform. My role extended beyond coding, encompassing strategic decision-making, team collaboration, and mentorship. The project's success stands as a testament to the seamless integration of technology and design, showcasing my technical proficiency and leadership capabilities."
          />
        );

      case "imme-website":
        return (
          <Project
            screenshotStatic={ImmeWebsitePNG}
            screenshotAnimated={ImmeWebsiteGIF}
            altMessage="Imme website animated screenshot"
            projectTitle="Solo Web Developer"
            projectName="Imme Website"
            projectLink="https://imme.io/"
            projectDescription="The Imme website has been made with NextJs and Styled components to
          promote our mobile application Imme available on the App Store and the
          Play Store. I have been this project's sole developer, ensuring
          consistency and best practices meet our quality requirements."
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
          <div className="absolute -top-5 -left-8 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob"></div>
          <div className="absolute -top-14 -right-4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-5 left-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-4000"></div>
          <div className="z-10">
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in"
              onClick={() => handleProject("cycurid-dashboard")}
            >
              Cycurid Dashboard
            </p>
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in2"
              onClick={() => handleProject("imme-app")}
            >
              Imme App
            </p>
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in3"
              onClick={() => handleProject("cycurid-website")}
            >
              Cycurid Website
            </p>
            <p
              className="text-2xl cursor-pointer hover:underline animate-slide-in4"
              onClick={() => handleProject("imme-website")}
            >
              Imme Website
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

export default Workscreen;
