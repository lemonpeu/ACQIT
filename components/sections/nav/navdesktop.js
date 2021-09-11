import React from 'react';
import styles from './nav.module.scss';
import Image from 'next/image';

const NavDesktop = () => {
    return (
        <div className={styles.containerDesktop}>
            <Image
                width={60}
                height={60}
                layout="fixed"
                className={styles.logo}
                src="/images/icons/SVG/logonav.svg"
                alt=""
            />
            <nav className={styles.nav}>
                <Image
                    width={150}
                    height={30}
                    layout="fixed"
                    className={styles.logoText}
                    src="/images/icons/SVG/logotext.svg"
                    alt=""
                />
                <ul className={styles.list}>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                </ul>
                <div className={styles.listContact}>
                    <p>11-39844968</p>
                    <p className={styles.contact}>Contactate!</p>
                </div>
            </nav>
        </div>
    );
};

export default NavDesktop;
