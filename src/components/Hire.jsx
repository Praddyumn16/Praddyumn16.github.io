import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

const Hire = () => {
  return (
    <div id="hire"
      className={`${styles.sectionSubText} ${styles.padding} flex justify-center text-justify bg-black-100 rounded-xl`}
    >
      <div>
        Want to hire me? Have a look at my&nbsp;
        <a
          href="https://drive.google.com/file/d/1ALNJp_p_LGw926KviFTXmDcPlkFKQ1-s/view?usp=sharing"
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
