import styles from './servicesGraphic.module.scss';
import React from 'react';
import LinesDesktop from '../../svg/linesDesktop';
import ServicesTextDesktop from '../../sections/ServicesTextDesktop/ServicesTextDesktop';

const ServicesGraphic = ({ isModalVisible, showServices }) => {
    return (
        <div className={styles.graphContainer}>
            {showServices && (
                <>
                    <LinesDesktop showAnimation={showServices} />
                    <ServicesTextDesktop isModalVisible={isModalVisible} />
                </>
            )}
        </div>
    );
};

export default ServicesGraphic;
