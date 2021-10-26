import { useEffect } from "react";
import styles from "./HeaderHome.module.scss";
import Image from "../../common/Image/Image";
import useWindowSize from "../../utils/windowSice";
import IsVisible from "../../utils/isVisible";
import Link from "next/link";

const HeaderHome = ({ is1thSectionVisible }) => {
  const size = useWindowSize();
  //setRef works for choosing position on side nav
  const [setRef, visible] = IsVisible({ threshold: 0.2 });

  const videos = [
    "videos/home_1.mp4",
    "videos/home_2.mp4",
    "videos/home_3.mp4",
  ];

  useEffect(() => {
    is1thSectionVisible(visible);
  }, [visible, is1thSectionVisible]);

  const getRandomVideo = () => {
    return videos.sort(() => Math.random() - 0.5);
  };

  return (
    <div ref={setRef} id="firstSection" className="section">
      <header className={styles.header} style={{ height: "100vh" }}>
        <video autoPlay muted loop className={styles.myVideo}>
          <source src={getRandomVideo().slice(0, 1)} type="video/mp4" />
        </video>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Una mirada diferente del mercado IT</h1>
          <div className={styles.socialIconsContainer}>
            <div className={styles.imgContainer}>
              <a
                href=" https://www.instagram.com/acqit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/icons/SVG/instagramicon.svg"
                  alt="instagram"
                />
              </a>
            </div>
            <div className={styles.imgContainer}>
              <a
                href="https://www.linkedin.com/company/acqit/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/icons/SVG/linkedinicon.svg"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderHome;
