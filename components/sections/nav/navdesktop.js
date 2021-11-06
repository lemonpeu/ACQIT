import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./nav.module.scss";
import Image from "../../common/Image/Image";
import Link from "next/link";
import { useScrollDown } from "@/components/utils/isScrollDown";

const NavDesktop = ({ isFocused, goingUp }) => {
  const scrollY = useScrollDown();
  const [isVisible, setIsVisible] = useState(true);

  const number = scrollY < 100;

  useEffect(() => {
    if (goingUp || number) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [goingUp, number]);

  return (
    <div className={styles.containerDesktop}>
      <button
        className={styles.navBtnPosition}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Image
          width={60}
          height={60}
          layout="fixed"
          className={styles.logo}
          src="/images/icons/SVG/logonav.svg"
          alt=""
        />
      </button>
      <nav className={`${styles.nav} ${isVisible ? "navAnimation" : ""}`}>
        {isVisible && (
          <>
            <Link href="/" passHref>
              <Image
                width={120}
                height={20}
                layout="fixed"
                className={styles.logoText}
                src="/images/icons/SVG/logotext.svg"
                alt="logo ACQIT"
              />
            </Link>
            <ul className={styles.list + " " + "navItemsAnimation"}>
              <Link href="/nosotros" passHref>
                <li>Nosotros</li>
              </Link>
              <li className={styles.usItem}>
                <Link
                  href="/#servicios"
                  passHref
                  className={styles.servicesItem}
                >
                  Servicios
                </Link>
                <ul className={styles.subList}>
                  <Link href="/equipamiento" passHref>
                    <li className={styles.navItem}>Equipamiento</li>
                  </Link>
                  <Link href="/consultoria" passHref>
                    <li className={styles.navItem}>Consultoría IT</li>
                  </Link>
                  <Link href="/seguridadit" passHref>
                    <li className={styles.navItem}>Seguridad IT</li>
                  </Link>
                  <Link href="/disenio" passHref>
                    <li className={styles.navItem}>Diseño web</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </>
        )}

        {isVisible && (
          <>
            <div className={styles.listContact + " " + "navItemsAnimation"}>
              <p>(11) 3984-4968</p>
              <a
                href="#email"
                className={styles.contact}
                onClick={() => isFocused(true)}
              >
                ¡Contactate!
              </a>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavDesktop;
