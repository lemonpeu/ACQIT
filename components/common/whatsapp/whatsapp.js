import React from 'react';
import styles from './whatsapp.module.scss';
import Image from 'next/image';

const Whatsapp = () => {
    const myLoader = ({ src, width, quality }) => {
        return `https://3dimpresion.com.ar/images/icons/SVG/wppicon.svg?w=90&q=75`;
    };
    return (
        <div className={styles.whatsappContainer}>
            <div className={styles.imgContainer}>
                <Image
                    // loader={myLoader}
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
