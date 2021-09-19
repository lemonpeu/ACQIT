import { useState, useEffect } from 'react';
import { companiesLogos } from '../../utils/companiesArray';
import styles from './companies.module.scss';
import { useMediaQuery } from '../../utils/mediaquery';
import Image from '../Image/Image';

const Companies = () => {
    let arrayAmount = useMediaQuery(`(min-width: 1000px)`);
    const getRandomItems = () => {
        return companiesLogos.sort(() => Math.random() - 0.5);
    };

    return (
        <div style={{ width: '100%' }}>
            <div className={styles.companiesContainer + ' ' + 'companiesContainer'}>
                {getRandomItems()
                    .slice(0, arrayAmount ? 18 : 9)
                    .map((item, key) => (
                        <Image
                            key={key}
                            layout={'intrinsic'}
                            width={arrayAmount ? 200 : 100}
                            height={arrayAmount ? 180 : 100}
                            // loader={myLoader}
                            src={`/${item.url}`}
                            alt={item.title}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Companies;
