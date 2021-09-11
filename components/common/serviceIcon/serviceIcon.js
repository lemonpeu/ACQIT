import React from 'react';
import styles from './serviceIcon.module.scss';
import Image from 'next/image';

const ServiceIcon = ({ name, style, styleImg }) => {
    return (
        <div style={style} className={styles.iconContainer}>
            <Image
                width={100}
                height={80}
                layout="responsive"
                style={styleImg}
                src={'/images/icons/home/SVG/' + name + '.svg'}
                alt={name + 'icono'}
            />
        </div>
    );
};

export default ServiceIcon;
