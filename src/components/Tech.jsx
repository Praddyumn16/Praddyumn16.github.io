import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";

import { useState, useEffect } from "react";

const Tech = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) =>
        isSmallScreen && index >= 4 ? null : (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
