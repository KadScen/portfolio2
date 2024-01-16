import { useState, ChangeEvent } from "react";
import { Global, css } from "@emotion/react";

function ButtonsRadio() {
  const [selectedRadio, setSelectedRadio] = useState<string>("radio1");

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="flex space-x-4">
      <input
        type="radio"
        name="radio"
        id="radio1"
        checked={selectedRadio === "radio1"}
        onChange={handleRadioChange}
        className="sr-only"
      />
      <label htmlFor="radio1" className="">
        <div className="bg-neutral-950 h-64 min-w-10 rounded-xl">
          {selectedRadio === "radio1" ? (
            <p className="text-white animate-opening">
              Display content for radio1
            </p>
          ) : (
            <div className="bg-neutral-950 h-64 w-10 rounded-xl animate-closing"></div>
          )}
        </div>
      </label>

      <input
        type="radio"
        name="radio"
        id="radio2"
        checked={selectedRadio === "radio2"}
        onChange={handleRadioChange}
        className="sr-only"
      />
      <label htmlFor="radio2" className="animate-example">
        <div className="bg-neutral-950 h-64 min-w-10 rounded-xl">
          {selectedRadio === "radio2" ? (
            <p className="text-white  animate-opening">
              Display content for radio2
            </p>
          ) : (
            <div className="bg-neutral-950 h-64 w-10 rounded-xl  animate-closing"></div>
          )}
        </div>
      </label>

      <Global
        styles={css`
          @keyframes example {
            from {
              width: 40px;
            }
            to {
              width: 200px;
            }
          }
          @keyframes exampleReverse {
            from {
              width: 200px;
            }
            to {
              width: 40px;
            }
          }

          .animate-opening {
            animation-name: example;
            animation-duration: 0.6s;
          }
          .animate-closing {
            animation-name: exampleReverse;
            animation-duration: 0.6s;
          }
        `}
      />
    </div>
  );
}

export default ButtonsRadio;
