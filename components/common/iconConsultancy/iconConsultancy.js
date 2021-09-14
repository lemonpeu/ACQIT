import React from 'react';
import styles from './iconConsultancy.module.scss';
import Image from 'next/image';

const IconConsultancy = ({ text, src, alt }) => {
    const myLoader = (img, width, quality) => {
        return `https://3dimpresion.com.ar/${src}?w=80&q=${quality || 75}`;
    };
    return (
        <div className={styles.iconContainer}>
            <Image width={80} height={80} src={src} alt={alt} />
            <p>{text}</p>
        </div>
    );
};

export default IconConsultancy;
