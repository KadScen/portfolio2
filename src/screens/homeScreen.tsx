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
    <div className="flex items-center h-full">
      <div className="flex flex-col items-center w-full space-y-8 m-auto">
        <div className="relative flex flex-col items-center w-80">
          <div className="absolute -top-14 -left-8 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animate-slide-in"></div>
          <div className="absolute -top-20 -right-4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000 animate-slide-in3"></div>
          <div className="absolute -top-14 left-40 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-4000 animate-slide-in4"></div>
          <Carousel controls={false} indicators={false}>
            {mySkills.map((skill, index) => (
              <Carousel.Item interval={2000} key={index}>
                <p className="text-3xl">{skill}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="w-full flex justify-end pt-20">
          <div className="lg:w-2/6 w-full animate-slide-in4">
            <p className="text-lg md:text-xl text-justify">
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
