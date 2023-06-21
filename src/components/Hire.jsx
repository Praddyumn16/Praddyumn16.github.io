import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

const Hire = () => {
  return (
    <div
      className={`${styles.sectionSubText} ${styles.padding} flex justify-center text-justify bg-black-100 rounded-xl`}
    >
      <div>
        Want to hire me? Have a look at my&nbsp;
        <a
          href="https://drive.google.com/file/d/10u-CxGOiNhbyQSqyZ-mK7_58eoCxO5_i/view?usp=drive_link"
          target="_blank"
          className="text-blue-800"
        >
          Resume.
        </a>
        &nbsp;and Feel free to reach out to me on&nbsp;
        <a
          href="https://www.linkedin.com/in/praddyumnshukla/"
          target="_blank"
          className="text-blue-800"
        >
          LinkedIn!
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Hire, "");
