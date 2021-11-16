import { useEffect, useState } from "react";
import styles from "./LinesHomeSection.module.scss";
import BoxUserName from "../../common/boxusername/boxusername";
import LineContainer from "../../sections/LineContainer/LineContainer";
import useWindowSize from "../../utils/windowSice";
import IsVisible from "../../utils/isVisible";

const LinesHomeSection = ({ is3rdSectionVisible, isVisible, isEsp }) => {
  const [setRef, visible] = IsVisible({ threshold: 0.2 });
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsAnimation(true);
      is3rdSectionVisible(isAnimation);
    } else {
      is3rdSectionVisible(false);
    }
  }, [visible, is3rdSectionVisible, isAnimation]);
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
        <LineContainer isVisible={isAnimation} isEsp={isEsp} />
      </section>
    </div>
  );
};

export default LinesHomeSection;
