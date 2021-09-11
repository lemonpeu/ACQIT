import React from 'react';
import styles from './whatsapp.module.scss';
import Image from 'next/image';

const Whatsapp = () => {
    return (
        <div className={styles.whatsappContainer}>
            <div className={styles.imgContainer}>
                <Image
                    // className={styles.img}
                    width={90}
                    height={90}
                    layout="fixed"
                    src="/images/icons/SVG/wppicon.svg"
                    alt="whatsapp"
                />
            </div>
        </div>
    );
};

export default Whatsapp;
