import React from 'react';
import styles from './nav.module.scss';
import Image from '../../common/Image/Image';
import { myLoader } from '../../utils/myLoader';

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
                    <a href="https://3dimpresion.com.ar/Peu/nosotros.html">
                        <li className={styles.principalItem}>Nosotros</li>
                    </a>
                    <a href="https://3dimpresion.com.ar/Peu/index.html#servicios">
                        <li className={styles.principalItem}>Servicios</li>
                    </a>
                    <a href="https://3dimpresion.com.ar/Peu/equipamiento.html">
                        <li className={styles.navItem}>Equipamiento +</li>
                    </a>
                    <a href="https://3dimpresion.com.ar/Peu/consultoria.html">
                        <li className={styles.navItem}>ConsultoríaIT +</li>
                    </a>
                    <a href="https://3dimpresion.com.ar/Peu/seguridadit.html">
                        <li className={styles.navItem}>SeguridadIT +</li>
                    </a>
                    <a href="https://3dimpresion.com.ar/Peu/disenio.html">
                        <li className={styles.navItem}>Diseño web +</li>
                    </a>
                </ul>
                <div className={styles.listContact}>
                    <p className={styles.contact}>Contactate!</p>
                </div>
            </nav>
        </div>
    );
};

export default NavMobile;
