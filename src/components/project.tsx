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
    <div className="flex flex-col justify-center items-center max-w-2xl rounded-2xl my-8">
      {hasScreenshots && (
        <img
          className="flex justify-center items-center w-full rounded-2xl my-4"
          src={animatedStates["Imme"] ? screenshotAnimated : screenshotStatic}
          alt={altMessage}
          onMouseEnter={() => handleMouseEnter("Imme")}
          onMouseLeave={() => handleMouseLeave("Imme")}
        />
      )}
      {!hasScreenshots && screenshotList?.length === 1 ? (
        <img
          className="flex justify-center items-center w-full rounded-2xl my-4"
          src={screenshotList[0]}
          alt={altMessage}
          onMouseEnter={() => handleMouseEnter("Imme")}
          onMouseLeave={() => handleMouseLeave("Imme")}
        />
      ) : null}
      {screenshotList && screenshotList.length > 1 ? (
        <div className="rounded-2xl">
          <AwesomeSlider
            bullets={false}
            organicArrows={screenshotList.length > 1 ? true : false}
            transitionDelay={2000}
            className="flex justify-center items-center w-[640px] h-[400px] bg-blue-500 rounded-2xl my-8"
          >
            {handleLoopInArray()}
          </AwesomeSlider>
        </div>
      ) : null}
      <p className="text-xl font-bold">{projectTitle}</p>
      <p className="font-bold">
        <a href={projectLink}>{projectName}</a>
      </p>
      <p className="text-center">{projectDescription}</p>
    </div>
  );
}

export default Project;
