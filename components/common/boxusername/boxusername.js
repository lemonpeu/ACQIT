import styles from './boxusername.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Input from '../input/input';
import Image from 'next/image';

const BoxUserName = (props) => {
    const { icon, name, img, alt, text, boxUserName } = props;
    const { t } = useTranslation('common');

    return (
        <section
            className={`${boxUserName ? styles.boxUserNameStyle : styles.boxIconText} ${
                styles.containerBox
            }`}
        >
            <div className={styles.container}>
                {icon && (
                    <Image
                        className={styles.iconContainer}
                        src={img}
                        alt={alt}
                        width={110}
                        height={110}
                        layout="fixed"
                    />
                )}
                {boxUserName ? (
                    <div className={styles.welcomeContainer}>
                        <p className={styles.text}>
                            {t('welcome')} {name}
                        </p>
                        <div className={styles.desktopVersion}>
                            <p className={styles.text}>{t('assistanceparraph')}</p>
                            <label htmlFor="email" className={styles.text}>
                                {t('emailparraph')}
                            </label>
                            <Input placeholder="E-mail." id="email" />
                        </div>
                    </div>
                ) : (
                    <p className={styles.text}>{text}</p>
                )}
            </div>
        </section>
    );
};

export default BoxUserName;
