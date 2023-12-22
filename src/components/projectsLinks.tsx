// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

import Project from "./project";
import ImmeWebsiteGIF from "../assets/imme_website.gif";
import ImmeWebsitePNG from "../assets/imme_website_static.png";
import CycuridWebsiteGIF from "../assets/cycurid_website.gif";
import CycuridWebsitePNG from "../assets/cycurid_website_static.png";
import ImmeAppScreenshot1 from "../assets/imme_app_1_landscape.png";
import ImmeAppScreenshot2 from "../assets/imme_app_2_landscape.png";
import ImmeAppScreenshot3 from "../assets/imme_app_3_landscape.png";
import NDAPNG from "../assets/nda.png";
import SightseerAppGIF from "../assets/sightseer_app.gif";
import SightseerAppPNG from "../assets/sightseer_app_static.png";
import FlatmateAppScreenshot1 from "../assets/flatmate_app.png";
import FlatmateAppScreenshot2 from "../assets/flatmate_app_2.png";
import FlatmateAppScreenshot3 from "../assets/flatmate_app_3.png";
import FlatmateAppScreenshot4 from "../assets/flatmate_app_4.png";
import FlatmateAppScreenshot5 from "../assets/flatmate_app_5.png";

function ProjectsLinks() {
  return (
    <div className="flex flex-col items-center w-full">
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

      <Project
        screenshotList={[NDAPNG]}
        altMessage="Cycurid dashboard screenshots"
        projectTitle="Front-End Developer"
        projectName="Cycurid dashboard website"
        projectLink=""
        projectDescription=""
      />

      <Project
        screenshotStatic={SightseerAppPNG}
        screenshotAnimated={SightseerAppGIF}
        altMessage="Sightseer app screenshots"
        projectTitle="Front-End Developer"
        projectName="Sightseer app"
        projectLink="https://sightseer.firebaseapp.com/"
        projectDescription="Sightseer is a travel app. Utilizing React, Class Components, and Bootstrap, I crafted an immersive user experience. The app seamlessly integrates Firebase for secure authentication, storage, and real-time updates through Cloud Firestore. With a visually appealing and responsive design, Sightseer goes beyond being an app—it's a sophisticated travel companion, transforming exploration into unforgettable memories."
      />

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

      <div className="flex justify-center items-center w-3/4 h-64 bg-blue-500 rounded-2xl my-8">
        <p>More coming up soon</p>
      </div>
    </div>
  );
}

export default ProjectsLinks;
