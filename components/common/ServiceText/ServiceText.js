import styles from './ServiceText.module.scss';
import ServiceIcon from '../serviceIcon/serviceIcon';
import Link from 'next/link';

const ServiceText = ({ isModalVisible, name, link, text, title, id }) => {
    return (
        <div
            className={`${styles.servicesItemContainer} ${
                !isModalVisible && 'servicesItemAnimation'
            }`}
        >
            <ServiceIcon name={name} layout={'fixed'} width={40} height={40} />
            <div className={styles.descriptionContainer + ' ' + 'descriptionContainerAnimation'}>
                <p className={styles.titleDescription}>
                    <span style={{ fontSize: '1.3rem' }}>0{id}</span> |{' '}
                    <Link href={link} style={{ lineHeight: 1.5 }} passHref>
                        {title}
                    </Link>
                    <span className={styles.seeMore}>
                        <Link href={link} passHref>
                            ver +
                        </Link>
                    </span>
                </p>
                <p className={styles.graphDescription}>{text}</p>
            </div>
        </div>
    );
};

export default ServiceText;
