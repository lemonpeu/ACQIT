import styles from './buttonNav.module.scss';
import Image from 'next/image';

const ButtonNav = ({ setIsNavVisible }) => {
    const myLoader = (img, width, quality) => {
        return `https://3dimpresion.com.ar/images/icons/SVG/logonav.svg?w=64&q=${quality || 75}`;
    };
    return (
        <>
            <button className={styles.openBtnNav} onClick={() => setIsNavVisible(true)}>
                <Image
                    className={styles.logoNav}
                    // loader={myLoader}
                    width={64}
                    height={64}
                    layout="fixed"
                    src="/images/icons/SVG/logonav.svg"
                    alt="logo"
                />
            </button>
        </>
    );
};

export default ButtonNav;
