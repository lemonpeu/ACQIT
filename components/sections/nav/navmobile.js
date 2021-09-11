import React from 'react';
import styles from './nav.module.scss';
import Image from 'next/image';

const NavMobile = ({ onClick }) => {
    return (
        <div className={styles.containerMobile}>
            <nav className={styles.nav}>
                {/* <img className={styles.logo} src="images/icons/SVG/logonav.svg" alt="" /> */}
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

                    <Image
                        width={85}
                        height={25}
                        layout="fixed"
                        className={styles.logoText}
                        src="/images/icons/SVG/logotext.svg"
                        alt=""
                    />
                </div>

                <ul className={styles.list}>
                    <li className={styles.principalItem}>Nosotros</li>
                    <li className={styles.principalItem}>Servicios</li>
                    <li className={styles.navItem}>Equipamiento +</li>
                    <li className={styles.navItem}>SoporteIT +</li>
                    <li className={styles.navItem}>SeguridadIT +</li>
                    <li className={styles.navItem}>Diseño web +</li>
                </ul>
                <div className={styles.listContact}>
                    <p className={styles.contact}>Contactate!</p>
                </div>
            </nav>
        </div>
    );
};

export default NavMobile;
