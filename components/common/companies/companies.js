import { companiesLogos } from '../../utils/companiesArray';
import styles from './companies.module.scss';
import { useMediaQuery } from '../../utils/mediaquery';
import Image from 'next/image';

const Companies = () => {
    let arrayAmount = useMediaQuery(`(min-width: 1000px)`);
    const getRandomItems = () => {
        return companiesLogos.sort(() => Math.random() - 0.5);
    };

    return (
        <div className={styles.companiesContainer}>
            {getRandomItems()
                .slice(0, arrayAmount ? 28 : 9)
                .map((item, key) => (
                    <Image
                        key={key}
                        layout="fixed"
                        width={140}
                        height={100}
                        src={`/${item.url}`}
                        alt={item.title}
                    />
                ))}
        </div>
    );
};

export default Companies;
