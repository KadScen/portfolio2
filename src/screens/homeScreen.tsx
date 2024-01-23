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
    <div className="h-full grid grid-cols-3 grid-rows-2 animate-slide-in">
      <div></div>
      <div className="flex justify-center items-center min-w-max">
        <Carousel controls={false} indicators={false}>
          {mySkills.map((skill, index) => (
            <Carousel.Item interval={2000} key={index}>
              <p className="text-3xl">{skill}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className="">
        <p className="text-xl">
          I'm a front-end developer who loves making websites look cool and work
          smoothly. I worked with Javascript, Typescript, React and NextJs... so
          far. Let's create awesome stuff together!
        </p>
      </div>
    </div>
  );
}

export default HomeScreen;
