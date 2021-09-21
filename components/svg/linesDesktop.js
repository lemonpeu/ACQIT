import React from 'react';
import { Line1, Line2, Line3, Line1Blue, Line2Blue, Line3Blue } from './line';
import styles from './linesDesktop.module.scss';

const LinesDesktop = ({ showAnimation }) => {
    return (
        <div className={`${styles.container} ${showAnimation && 'lines'}`}>
            <div className={styles.line1}>
                <Line1Blue />
            </div>
            <div className={styles.line2}>
                <Line2Blue />
            </div>
            <div className={styles.line3}>
                <Line3Blue />
            </div>
        </div>
    );
};

export default LinesDesktop;
