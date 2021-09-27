import { useEffect } from "react";
import styles from "./LinesHomeSection.module.scss";
import Footer from "../../sections/footer/footer";
import FooterDesktop from "../../sections/footer/footerdesktop";
import BoxUserName from "../../common/boxusername/boxusername";
import LineContainer from "../../sections/LineContainer/LineContainer";
import useWindowSize from "../../utils/windowSice";
import useOnScreen from "../../utils/isVisible";

const LinesHomeSection = ({ userName, isFooterMobile, isPage1200 }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });

  const size = useWindowSize();
  return (
    <div
      style={{
        height: isPage1200 ? `${size.height}px` : "100%",
      }}
      className={styles.linesHomeSection}
    >
      <section className={styles.linesGraphicContainer}>
        <LineContainer ref={setRef} isVisible={visible} />
      </section>

      <BoxUserName
        className={styles.boxUserName}
        boxUserName
        name={userName && userName}
      />
      {isFooterMobile ? <FooterDesktop /> : <Footer />}
    </div>
  );
};

export default LinesHomeSection;
