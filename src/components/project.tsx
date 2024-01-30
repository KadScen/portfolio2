import { useState, ReactNode } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

interface AnimatedStates {
  [key: string]: boolean;
}

interface PropsTypes {
  screenshotStatic?: string;
  screenshotAnimated?: string;
  altMessage: string;
  projectTitle: string;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  screenshotList?: string[];
}

function Project(props: PropsTypes) {
  const {
    screenshotAnimated,
    screenshotStatic,
    screenshotList,
    altMessage,
    projectTitle,
    projectName,
    projectLink,
    projectDescription,
  } = props;
  const hasScreenshots = screenshotAnimated || screenshotStatic;

  let hasListOfScreenshots: boolean;
  if (screenshotList) {
    hasListOfScreenshots = screenshotList?.length > 1;
  }

  const [animatedStates, setAnimatedStates] = useState<AnimatedStates>({});

  const handleMouseEnter = (key: string) => {
    setAnimatedStates((prevStates) => ({
      ...prevStates,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key: string) => {
    setAnimatedStates((prevStates) => ({
      ...prevStates,
      [key]: false,
    }));
  };

  const handleLoopInArray = (): ReactNode[] => {
    if (hasListOfScreenshots) {
      return screenshotList!.map((screenshot, index) => (
        <div key={index} data-src={screenshot} />
      ));
    } else {
      return [];
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-8 lg:space-x-10 space-x-0">
      {hasScreenshots && (
        <img
          className="flex justify-center items-center max-w-16 rounded-2xl my-4"
          src={animatedStates["Imme"] ? screenshotAnimated : screenshotStatic}
          alt={altMessage}
          onMouseEnter={() => handleMouseEnter("Imme")}
          onMouseLeave={() => handleMouseLeave("Imme")}
        />
      )}
      {!hasScreenshots && screenshotList?.length === 1 ? (
        <img
          className="flex justify-center items-center max-w-16 rounded-2xl my-4"
          src={screenshotList[0]}
          alt={altMessage}
          onMouseEnter={() => handleMouseEnter("Imme")}
          onMouseLeave={() => handleMouseLeave("Imme")}
        />
      ) : null}
      {screenshotList && screenshotList.length > 1 ? (
        <div className="max-w-16">
          <AwesomeSlider
            bullets={false}
            organicArrows={screenshotList.length > 1 ? true : false}
            transitionDelay={2000}
            className="flex justify-center items-center max-w-sm w-[320px] md:w-[640px] h-[256px] bg-blue-500 rounded-2xl my-8"
          >
            {handleLoopInArray()}
          </AwesomeSlider>
        </div>
      ) : null}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-1">
          <p className="text-xl font-bold">{projectTitle}</p>
          <p className="font-bold">
            <a href={projectLink}>{projectName}</a>
          </p>
        </div>
        <p className="text-justify">{projectDescription}</p>
      </div>
    </div>
  );
}

export default Project;
