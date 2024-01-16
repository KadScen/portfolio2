import { useState } from "react";
import worksExperience from "./worksExperience.json";

function WorkExperienceRadioCards() {
  // State to track the open/closed state of each job position
  const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (key: string) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const closeMenu = () => {
    // Close all menus when clicking outside
    setMenuStates({});
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-2">
        {/* Mapping through each job position */}
        {Object.keys(worksExperience).map((key) => {
          const job = worksExperience[key];

          return (
            <div
              key={key}
              className="relative inline-block text-left"
              onBlur={closeMenu}
            >
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id={`menu-button-${key}`}
                  aria-expanded={menuStates[key]}
                  aria-haspopup="true"
                  onClick={() => toggleMenu(key)}
                >
                  <div>
                    <p className="font-bold">{job.position}</p>
                    <p>{job.companyAndDate}</p>
                  </div>
                </button>
              </div>

              {menuStates[key] && (
                <div className="pt-2 space-y-2">
                  <p>{job.description}</p>
                  {job.tasks.map((workExperience, index) => (
                    <p key={index}>{workExperience}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkExperienceRadioCards;
