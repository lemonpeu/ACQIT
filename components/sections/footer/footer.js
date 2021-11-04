import styles from "./footer.module.scss";
import Image from "../../common/Image/Image";
import BoxUserName from "../../common/boxusername/boxusername";

const Footer = ({ name, autofocus }) => {
  return (
    <div className={styles.wrapper}>
      <BoxUserName boxUserName name={name} autofocus={autofocus} />
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
            <a href="tel:5491139844968">(11) 3984-4968</a>
          </li>
          <li className={styles.listItem}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              src="/images/icons/SVG/emailblack.svg"
              alt="email icon"
            />
            <a href="mailto:info@acqit.com.ar">info@acqit.com.ar</a>
          </li>
          <li className={styles.listItem}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              src="/images/icons/SVG/placeicon.svg"
              alt="place icon"
            />
            <a
              href="https://goo.gl/maps/nUsXBVnkfPPpEKfNA"
              rel="noreferrer"
              target="_blank"
            >
              Arcos 2836
            </a>
          </li>
        </ul>
        <hr />
        <ul className={styles.socialList}>
          <li className={styles.socialitem}>
            <a
              href="https://www.linkedin.com/company/acqit/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="https://www.instagram.com/acqit/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
