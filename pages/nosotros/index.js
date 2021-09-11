import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './nosotros.module.scss';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import Image from 'next/image';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';

const Nosotros = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const { t } = useTranslation('common');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');
    return (
        <div className={styles.wrapper}>
            {isNavDesktop ? (
                <NavDesktop />
            ) : (
                isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
            )}
            <section className={styles.main}>
                {!isNavDesktop && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>{t('us_title')}</h1>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imgContainer}>
                            <Image
                                // layout="responsive"
                                width={400}
                                height={360}
                                src="/images/extra/SVG/nosotros/line1.png"
                                alt="aaaaaa"
                            />
                            <Image
                                layout="responsive"
                                width={300}
                                height={300}
                                src="/images/extra/SVG/nosotros/line2.png"
                                alt="aaaaaa"
                            />
                            <Image
                                layout="responsive"
                                width={300}
                                height={300}
                                src="/images/extra/SVG/nosotros/line3.png"
                                alt="aaaaaa"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>{t('us_parraph_1')}.</p>
                            <p className={styles.description}>
                                {`${t('us_parraph_2')}. ${t('us_parraph_3')}.`}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.title}>{t('us_values_title')}</h4>
                        <p className={styles.description}>
                            {`${t('us_parraph_101')}. ${t('us_parraph_102')}`}
                        </p>
                        <p className={styles.description}>
                            <span>{t('us_innovation_title')}</span>:
                            <span> {`${t('us_parraph_201')} ${t('us_parraph_202')}`}</span>
                        </p>
                        <p className={styles.description}>
                            <span>{t('us_personalization_title')}</span>:
                            <span> {`${t('us_parraph_301')} ${t('us_parraph_202')}`}</span>
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.title}>{t('us_mission_title')}</h4>
                        <p className={styles.description}>{`${t('us_parraph_401')}. ${t(
                            'us_parraph_402'
                        )}`}</p>
                    </div>
                    <div>
                        <h4 className={styles.title}>{t('us_vision_title')}</h4>
                        <p className={styles.description}>
                            {`${t('us_parraph_501')}. ${t('us_parraph_502')}`}{' '}
                        </p>
                    </div>
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Nosotros;
