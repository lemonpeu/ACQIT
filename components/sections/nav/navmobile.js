import React from "react";
import styles from "./nav.module.scss";
import Image from "../../common/Image/Image";
import Link from "next/link";

const NavMobile = ({ onClick, isFocused }) => {
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
            <li className={styles.navItem}>Consultoría IT +</li>
          </Link>
          <Link href="/seguridadit" passHref>
            <li className={styles.navItem}>Segurida dIT +</li>
          </Link>
          <Link href="/disenio" passHref>
            <li className={styles.navItem}>Diseño web +</li>
          </Link>
        </ul>
        <div className={styles.listContact}>
          <a
            href="#email"
            className={styles.contact}
            onClick={() => isFocused(true)}
          >
            ¡Contactate!
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
