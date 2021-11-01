import styles from './servicesGraphic.module.scss';
import React from 'react';
import LinesDesktop from '../../svg/linesDesktop';
import ServicesTextDesktop from '../../sections/ServicesTextDesktop/ServicesTextDesktop';

const ServicesGraphic = ({ isVisible }) => {
    return (
        <div className={styles.graphContainer}>
            {isVisible && (
                <>
                    <LinesDesktop showAnimation={isVisible} />
                    <ServicesTextDesktop isModalVisible={isVisible} />
                </>
            )}
        </div>
    );
};

export default ServicesGraphic;
