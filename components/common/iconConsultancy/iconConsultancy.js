import React from 'react';
import styles from './iconConsultancy.module.scss';
import Image from '../Image/Image';

const IconConsultancy = ({ text, src, alt }) => {
    return (
        <div className={styles.iconContainer}>
            <Image width={80} height={80} src={src} alt={alt} />
            <p>{text}</p>
        </div>
    );
};

export default IconConsultancy;
