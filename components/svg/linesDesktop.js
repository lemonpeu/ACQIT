import React from 'react';
import { Line1, Line2, Line3 } from './line';
import styles from './linesDesktop.module.scss';

const LinesDesktop = ({ showAnimation }) => {
    return (
        <div className={`${styles.container} ${showAnimation && 'lines'}`}>
            <div className={styles.line1}>
                <Line1 />
            </div>
            <div className={styles.line2}>
                <Line2 />
            </div>
            <div className={styles.line3}>
                <Line3 />
            </div>
        </div>
    );
};

export default LinesDesktop;
