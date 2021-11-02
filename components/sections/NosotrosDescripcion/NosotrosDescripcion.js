import Image from "@/components/common/Image/Image";
import styles from "./NosotrosDescripcion.module.scss";
import NosotrosText from "@/components/common/nosotrosTexto/NosotrosText";
import useWindowSize from "@/components/utils/windowSice";

const NosotrosDescripcion = ({
  showText1,
  showText2,
  showText3,
  isFooterMobile,
  onClick1,
  onClick2,
  onClick3,
}) => {
  const size = useWindowSize();

  const imageWidth = () => {
    if (size.width < 1000) {
      return { width: 130, height: 120 };
    } else if (size.width > 1000 && size.width < 1700) {
      return { width: 200, height: 190 };
    } else {
      return { width: 250, height: 230 };
    }
  };

  return (
    <div className={styles.wrapper}>
      <article className={styles.descriptionContainer}>
        <div
          className={showText1 ? `${styles.setAnimation1}` : `${styles.icon}`}
        >
          <Image
            layout="fixed"
            width={imageWidth().width}
            height={imageWidth().height}
            src="/images/extra/SVG/nosotros/line1.png"
            alt="aaaaaa"
            onClick={() => onClick1(true)}
          />
        </div>
        {showText1 && <NosotrosText showText1={showText1} text1 />}
      </article>
      <article
        className={`${styles.descriptionContainer} ${
          showText3 ? "usAnimationBox2" : ""
        }`}
      >
        <div
          className={showText3 ? `${styles.setAnimation3}` : `${styles.icon}`}
        >
          <Image
            layout="fixed"
            width={imageWidth().width}
            height={imageWidth().height}
            src="/images/extra/SVG/nosotros/line2.png"
            alt="aaaaaa"
            onClick={() => onClick3(true)}
          />
        </div>
        {showText3 && <NosotrosText showText3={showText3} text3 />}
      </article>
      <article
        className={`${styles.descriptionContainer} ${styles.middle} ${
          showText2 ? "setAnimation2" : ""
        }`}
        style={{
          display: showText2 && isFooterMobile && "flex",
          flexDirection: showText2 && isFooterMobile && "row-reverse",
        }}
      >
        <div
          className={showText2 ? `${styles.setAnimation2}` : `${styles.icon}`}
        >
          <Image
            layout="fixed"
            width={imageWidth().width}
            height={imageWidth().height}
            src="/images/extra/SVG/nosotros/line3.png"
            alt="aaaaaa"
            onClick={() => onClick2(true)}
          />
        </div>
        {showText2 && <NosotrosText showText2={showText2} text2 />}
      </article>
    </div>
  );
};

export default NosotrosDescripcion;
