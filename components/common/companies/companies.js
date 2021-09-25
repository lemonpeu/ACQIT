import { companiesLogos } from '../../utils/companiesArray';
import styles from './companies.module.scss';
import Image from '../Image/Image';
import useWindowSize from '../../utils/windowSice';
import { useState } from 'react';

const Companies = () => {
    const [totalArray, setTotalArray] = useState(false);
    const size = useWindowSize();

    const getRandomItems = () => {
        return companiesLogos.sort(() => Math.random() - 0.5);
    };

    const setImageSize = () => {
        if (size.width > 700 && size.width < 900) {
            return { width: 150, height: 100 };
        } else if (size.width > 900 && size.width < 1500) {
            return { width: 200, height: 150 };
        } else if (size.width > 1700) {
            return { width: 200, height: 150 };
        } else {
            return { width: 100, height: 100 };
        }
    };

    const setArrayCount = () => {
        if (size.width > 700 && size.width < 900) {
            return 12;
        } else if (size.width > 900) {
            return 18;
        } else {
            return 9;
        }
    };

    return (
        <div className={styles.wrapper}>
            &
            <div className={`${styles.companiesContainer} ${'companiesContainer'}`}>
                {getRandomItems()
                    .slice(0, totalArray ? companiesLogos.length : setArrayCount())
                    .map((item, key) => (
                        <div className={styles.imgContainer} key={key}>
                            <Image
                                key={key}
                                layout={'intrinsic'}
                                width={setImageSize().width}
                                height={setImageSize().height}
                                src={`/${item.url}`}
                                alt={item.title}
                            />
                        </div>
                    ))}
            </div>
            <button className={styles.plusIconContainer} onClick={() => setTotalArray(true)}>
                <Image
                    layout={'intrinsic'}
                    width={40}
                    height={38}
                    src={'/images/icons/home/SVG/plusicon.svg'}
                    alt={'Abrir más'}
                />
            </button>
        </div>
    );
};

export default Companies;
