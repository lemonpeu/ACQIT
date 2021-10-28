import React, { useState, useEffect, useCallback } from 'react';
import styles from './nav.module.scss';
import Image from '../../common/Image/Image';
import Link from 'next/link';

const NavDesktop = () => {
    const [showNav, setShowNav] = useState(true);

    const hideNav = useCallback(() => {
        setTimeout(() => {
            setShowNav(false);
        }, 5000);
    }, []);

    useEffect(() => {
        hideNav();
    }, [hideNav]);

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
            <nav className={`${styles.nav} ${showNav ? 'navAnimation' : ''}`}>
                {showNav && (
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
                        <ul className={styles.list + ' ' + 'navItemsAnimation'}>
                            <Link href="/nosotros" passHref>
                                <li>Nosotros</li>
                            </Link>
                            <li className={styles.usItem}>
                                <Link href="/#servicios" passHref className={styles.servicesItem}>
                                    Servicios
                                </Link>
                                <ul className={styles.subList}>
                                    <Link href="/equipamiento" passHref>
                                        <li className={styles.navItem}>Equipamiento</li>
                                    </Link>
                                    <Link href="/consultoria" passHref>
                                        <li className={styles.navItem}>ConsultoríaIT</li>
                                    </Link>
                                    <Link href="/seguridadit" passHref>
                                        <li className={styles.navItem}>SeguridadIT</li>
                                    </Link>
                                    <Link href="/disenio" passHref>
                                        <li className={styles.navItem}>Diseño web</li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </>
                )}

                {showNav && (
                    <>
                        <div className={styles.listContact + ' ' + 'navItemsAnimation'}>
                            <p>11-39844968</p>
                            <Link href="/#contact" passHref>
                                <p className={styles.contact}>Contactate!</p>
                            </Link>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default NavDesktop;
