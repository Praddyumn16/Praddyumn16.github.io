import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

const Hire = () => {
  return (
    <div className={`${styles.heroSubText} flex justify-center`}>
      Want to hire me? Here's my&nbsp;
      <a
        href="https://drive.google.com/file/d/10u-CxGOiNhbyQSqyZ-mK7_58eoCxO5_i/view?usp=drive_link"
        target="_blank"
        className="text-blue-800"
      >
        Resume.
      </a>
      &nbsp;Feel free to reach out to me on&nbsp;
      <a
        href="https://www.linkedin.com/in/praddyumnshukla/"
        target="_blank"
        className="text-blue-800"
      >
        LinkedIn!
      </a>
    </div>
  );
};

export default SectionWrapper(Hire, "");
