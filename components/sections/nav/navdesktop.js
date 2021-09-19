import React, { useState } from 'react';
import styles from './nav.module.scss';
import Image from '../../common/Image/Image';

const NavDesktop = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className={styles.containerDesktop}>
            <button className={styles.navBtnPosition} onClick={() => setShowNav(!showNav)}>
                <Image
                    width={60}
                    height={60}
                    layout="fixed"
                    className={styles.logo}
                    src="/images/icons/SVG/logonav.svg"
                    alt=""
                />
            </button>
            {showNav && (
                <nav className={styles.nav}>
                    <Image
                        width={120}
                        height={20}
                        layout="fixed"
                        className={styles.logoText}
                        src="/images/icons/SVG/logotext.svg"
                        alt=""
                    />
                    <ul className={styles.list}>
                        <a href="https://3dimpresion.com.ar/Peu/nosotros.html">
                            <li>Nosotros</li>
                        </a>
                        <a href="https://3dimpresion.com.ar/Peu/index.html#servicios">
                            <li>Servicios</li>
                        </a>
                    </ul>
                    <div className={styles.listContact}>
                        <p>11-39844968</p>
                        <p className={styles.contact}>Contactate!</p>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default NavDesktop;
