import React from 'react';
import styles from './serviceIcon.module.scss';
import Image from '../Image/Image';

const ServiceIcon = ({ name, style, width, height, layout }) => {
    return (
        <div style={style} className={styles.iconContainer + ' ' + 'serviceIconContainer'}>
            <Image
                width={width}
                height={height}
                layout={layout ? layout : 'responsive'}
                src={'/images/icons/home/SVG/' + name + '.svg'}
                alt={name + 'icono'}
            />
        </div>
    );
};

export default ServiceIcon;
