import { useEffect } from "react";
import styles from "./LinesHomeSection.module.scss";
import BoxUserName from "../../common/boxusername/boxusername";
import LineContainer from "../../sections/LineContainer/LineContainer";
import useWindowSize from "../../utils/windowSice";
import IsVisible from "../../utils/isVisible";

const LinesHomeSection = ({ is3rdSectionVisible, isFooterMobile, ref }) => {
  const [setRef, visible] = IsVisible({ threshold: 0.2 });

  useEffect(() => {
    is3rdSectionVisible(visible);
  }, [visible]);
  return (
    <div
      className={styles.linesHomeSection + " " + "section"}
      id="linesGraphic"
    >
      <section
        className={styles.linesGraphicContainer}
        id="thirdSection"
        ref={setRef}
      >
        <LineContainer />
      </section>
    </div>
  );
};

export default LinesHomeSection;
