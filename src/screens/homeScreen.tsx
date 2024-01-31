import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeScreen() {
  const mySkills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "NextJs",
    "TailwindCSS",
    "Redux",
    "Styled Component",
    "Firebase",
    "MongoDB",
    "Git",
    "Jira",
    "Wordpress",
    "Liquid",
    "Shopify",
  ];

  return (
    <div className="flex items-center h-full animate-slide-in">
      <div className="flex flex-col items-center w-fit space-y-8 m-auto">
        <Carousel controls={false} indicators={false}>
          {mySkills.map((skill, index) => (
            <Carousel.Item interval={2000} key={index}>
              <p className="text-3xl">{skill}</p>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="w-full flex justify-end pt-20">
          <div className="lg:w-2/6 w-full">
            <p className="text-lg md:text-xl">
              I'm a front-end developer who loves making websites look cool and
              work smoothly. I worked with Javascript, Typescript, React and
              NextJs... so far. Let's create awesome stuff together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
