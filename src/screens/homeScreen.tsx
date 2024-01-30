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
    <div className="h-full animate-slide-in">
      <div className="lg:w-full h-1/2 flex justify-center items-center min-w-max">
        <Carousel controls={false} indicators={false}>
          {mySkills.map((skill, index) => (
            <Carousel.Item interval={2000} key={index}>
              <p className="text-3xl">{skill}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="w-full flex justify-end">
        <div className="lg:w-2/6 w-full">
          <p className="text-lg md:text-xl">
            I'm a front-end developer who loves making websites look cool and
            work smoothly. I worked with Javascript, Typescript, React and
            NextJs... so far. Let's create awesome stuff together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
