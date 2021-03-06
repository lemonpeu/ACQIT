import React from 'react';
import styles from './whatsapp.module.scss';
import Image from '../Image/Image';

const Whatsapp = () => {
    return (
        <a href="https://wa.me/5491171076208" target="_blank" rel="noopener noreferrer">
            <div className={styles.whatsappContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        width={90}
                        height={90}
                        layout="fixed"
                        src="/images/icons/SVG/wppicon.svg"
                        alt="whatsapp"
                    />
                </div>
            </div>
        </a>
    );
};

export default Whatsapp;
