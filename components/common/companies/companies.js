import { companiesLogos } from '../../utils/companiesArray';
import styles from './companies.module.scss';
import { useMediaQuery } from '../../utils/mediaquery';
import Image from 'next/image';

const Companies = () => {
    let arrayAmount = useMediaQuery(`(min-width: 1000px)`);
    const getRandomItems = () => {
        return companiesLogos.sort(() => Math.random() - 0.5);
    };

    const myLoader = (img, width, quality) => {
        return `https://3dimpresion.com.ar/${item.url}?w=${arrayAmount ? 200 : 90}&q=${
            quality || 75
        }`;
    };

    return (
        <div style={{ width: '100%' }}>
            <div className={styles.companiesContainer + ' ' + 'companiesContainer'}>
                {getRandomItems()
                    .slice(0, arrayAmount ? 28 : 9)
                    .map((item, key) => (
                        <Image
                            key={key}
                            layout={'intrinsic'}
                            width={arrayAmount ? 200 : 90}
                            height={arrayAmount ? 180 : 80}
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
