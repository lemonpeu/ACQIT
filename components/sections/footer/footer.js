import styles from "./footer.module.scss";
import Image from "../../common/Image/Image";
import BoxUserName from "../../common/boxusername/boxusername";

const Footer = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <BoxUserName boxUserName name={name} />
      <footer className={`${styles.containerMobile} ${styles.container}`}>
        <ul className={styles.footerList}>
          <li className={styles.listItem}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              src="/images/icons/SVG/teliconblack.svg"
              alt="telefono"
            />{" "}
            11-39844968
          </li>
          <li className={styles.listItem}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              src="/images/icons/SVG/emailblack.svg"
              alt="email icon"
            />
            info@acqit.com.ar
          </li>
          <li className={styles.listItem}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              src="/images/icons/SVG/placeicon.svg"
              alt="place icon"
            />
            Arcos 2836
          </li>
        </ul>
        <hr />
        <ul className={styles.socialList}>
          <li className={styles.socialitem}>
            <a href="https://www.linkedin.com/company/acqit/about/">
              <Image
                width={30}
                height={30}
                layout="fixed"
                src="/images/icons/SVG/linkedinblack.svg"
                alt="linkedin"
              />
            </a>
          </li>
          <li className={styles.socialitem}>
            <a href="">
              <Image
                width={30}
                height={30}
                layout="fixed"
                src="/images/icons/SVG/facebookblackicon.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li className={styles.socialitem}>
            <a href="https://www.instagram.com/acqit/">
              <Image
                width={30}
                height={30}
                layout="fixed"
                src="/images/icons/SVG/instagramblack.svg"
                alt="instagram"
              />
            </a>
          </li>
        </ul>
        <a href="#top" aria-label="Scroll to Top">
          <div className={styles.goToTop}>
            <Image
              width={30}
              height={120}
              layout="fixed"
              src="/images/icons/SVG/flecha.svg"
              alt="go to top"
            />
          </div>
        </a>
        <section className={styles.logoContainer}>
          <div className={styles.imgContainer}>
            <Image
              width={200}
              height={50}
              src="/images/icons/SVG/logo.svg"
              alt={"logo"}
            />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
