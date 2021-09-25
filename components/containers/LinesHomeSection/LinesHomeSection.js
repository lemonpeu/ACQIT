import styles from "./LinesHomeSection.module.scss";
import Footer from "../../sections/footer/footer";
import FooterDesktop from "../../sections/footer/footerdesktop";
import BoxUserName from "../../common/boxusername/boxusername";
import LineContainer from "../../sections/LineContainer/LineContainer";
import useWindowSize from "../../utils/windowSice";

const LinesHomeSection = ({
  userName,
  isModalVisible,
  isFooterMobile,
  isPage1200,
}) => {
  const size = useWindowSize();
  return (
    <div
      style={{
        height: isPage1200 ? `${size.height}px` : "100%",
      }}
      className={styles.linesHomeSection}
    >
      <section className={styles.linesGraphicContainer}>
        <LineContainer isModalVisible={isModalVisible} />
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
