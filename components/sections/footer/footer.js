import styles from './footer.module.scss';
import Image from '../../common/Image/Image';
import { myLoader } from '../../utils/myLoader';

const Footer = () => {
    return (
        <footer className={`${styles.containerMobile} ${styles.container}`}>
            <ul className={styles.footerList}>
                <li className={styles.listItem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/teliconblack.svg"
                        alt="telefono"
                    />{' '}
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
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/linkedinblack.svg"
                        alt="linkedin"
                    />
                </li>
                <li className={styles.socialitem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/facebookblackicon.svg"
                        alt="facebook"
                    />
                </li>
                <li className={styles.socialitem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/instagramblack.svg"
                        alt="instagram"
                    />
                </li>
            </ul>
            <a href="#">
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
                    <Image width={200} height={50} src="/images/icons/SVG/logo.svg" alt={'logo'} />
                </div>
            </section>
        </footer>
    );
};

export default Footer;
