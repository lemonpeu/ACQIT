import React from 'react';
import styles from './linesGraphic.module.scss';

const LinesGraphic = () => {
    return (
        <div className={styles.graphicContainer}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LinesGraphic;
