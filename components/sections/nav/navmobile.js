import React from "react";
import styles from "./nav.module.scss";
import Image from "../../common/Image/Image";
import Link from "next/link";

const NavMobile = ({ onClick }) => {
  return (
    <div className={styles.containerMobile}>
      <nav className={styles.nav}>
        <div className={styles.imgContainer}>
          <button onClick={onClick}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              className={styles.close}
              src="/images/icons/SVG/close.svg"
              alt=""
            />
          </button>
          <Link href="/" passHref>
            <Image
              width={85}
              height={25}
              layout="fixed"
              className={styles.logoText}
              src="/images/icons/SVG/logotext.svg"
              alt=""
            />
          </Link>
        </div>

        <ul className={styles.list}>
          <Link href="/nosotros" passHref>
            <li className={styles.principalItem}>Nosotros</li>
          </Link>
          <Link href="/#servicios" passHref>
            <li className={styles.principalItem}>Servicios</li>
          </Link>
          <Link href="/equipamiento" passHref>
            <li className={styles.navItem}>Equipamiento +</li>
          </Link>
          <Link href="/consultoria" passHref>
            <li className={styles.navItem}>ConsultoríaIT +</li>
          </Link>
          <Link href="/seguridadit" passHref>
            <li className={styles.navItem}>SeguridadIT +</li>
          </Link>
          <Link href="/disenio" passHref>
            <li className={styles.navItem}>Diseño web +</li>
          </Link>
        </ul>
        <div className={styles.listContact}>
          <Link href="/contact" passHref>
            <p className={styles.contact}>Contactate!</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
