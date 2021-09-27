import styles from "./HeaderHome.module.scss";
import Image from "../../common/Image/Image";
import useWindowSize from "../../utils/windowSice";

const HeaderHome = () => {
  const size = useWindowSize();
  const videos = [
    "videos/home_1.mp4",
    "videos/home_2.mp4",
    "videos/home_3.mp4",
  ];

  const getRandomVideo = () => {
    return videos.sort(() => Math.random() - 0.5);
  };
  return (
    <header className={styles.header} style={{ height: size.height + "px" }}>
      <video autoPlay muted loop className={styles.myVideo}>
        <source src={getRandomVideo().slice(0, 1)} type="video/mp4" />
      </video>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Una mirada diferente del mercado IT</h1>
        <div className={styles.socialIconsContainer}>
          <div className={styles.imgContainer}>
            <Image
              layout="fixed"
              width={40}
              height={40}
              src="/images/icons/SVG/facebookicon.svg"
              alt="facebook"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              layout="fixed"
              width={40}
              height={40}
              src="/images/icons/SVG/instagramicon.svg"
              alt="instagram"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              layout="fixed"
              width={40}
              height={40}
              src="/images/icons/SVG/linkedinicon.svg"
              alt="linkedin"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;