// import LandingScreen from "./screens/landingScreen";
import ButtonsRadio from "./components/buttonsRadio";

function App() {
  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex flex-col justify-center items-center h-3/6">
        {/* <LandingScreen /> */}
        <div className="flex flex-col items-center text-center border-y-2 border-neutral-950 w-2/5 py-3">
          <h1>Portfolio</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <div className="flex justify-center h-2/6">
        <ButtonsRadio />
      </div>
      <div className="flex justify-center content-end h-1/6">
        <h3>Alain Mondely</h3>
      </div>
    </div>
  );
}

export default App;
