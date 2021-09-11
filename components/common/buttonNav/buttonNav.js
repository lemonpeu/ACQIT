import { useState } from 'react';
import styles from './buttonNav.module.scss';
import Image from 'next/image';

const ButtonNav = ({ setIsNavVisible }) => {
    // const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <>
            <button className={styles.openBtnNav} onClick={() => setIsNavVisible(true)}>
                <Image
                    className={styles.logoNav}
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
