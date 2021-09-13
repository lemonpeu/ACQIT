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
                    <div className={styles.titleContainer + ' ' + styles.titleContainerPrincipal}>
                        <h1 className={styles.title + ' ' + styles.principalTitle}>
                            {t('us_title')}
                        </h1>
                        <div className={styles.lineTitle}></div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imgContainer}>
                            <Image
                                layout="fixed"
                                width={isFooterMobile ? 200 : 130}
                                height={isFooterMobile ? 190 : 120}
                                src="/images/extra/SVG/nosotros/line1.png"
                                alt="aaaaaa"
                            />
                            <div className={styles.imgUsContainer}>
                                <Image
                                    layout="fixed"
                                    width={isFooterMobile ? 200 : 130}
                                    height={isFooterMobile ? 190 : 120}
                                    src="/images/extra/SVG/nosotros/line2.png"
                                    alt="aaaaaa"
                                />
                                <div className={styles.thirdIcon}>
                                    <Image
                                        layout="fixed"
                                        width={isFooterMobile ? 200 : 130}
                                        height={isFooterMobile ? 190 : 120}
                                        src="/images/extra/SVG/nosotros/line3.png"
                                        alt="aaaaaa"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>
                                {t('us_parraph_1_white')}{' '}
                                <span style={{ color: '#0885e6' }}>{t('us_parraph_1_blue')}</span>.
                            </p>
                            <p className={styles.description}>
                                {`${t('us_parraph_2')}. ${t('us_parraph_3')}.`}
                            </p>
                        </div>
                    </div>
                    <div className={styles.textContainerSubContainer}>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.title}>
                                <Image
                                    width={25}
                                    height={25}
                                    src="/images/icons/nosotros/valoresicoon.svg"
                                    alt="valores icono"
                                />{' '}
                                <span style={{ paddingLeft: '1rem' }}>{t('us_values_title')}</span>
                            </h4>
                            <div className={styles.lineTitle}></div>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description} style={{ marginBottom: '2rem' }}>
                                {t('us_parraph_101')}{' '}
                                <span style={{ color: '#0885e6' }}>{t('us_parraph_102')}</span>
                            </p>
                            <p className={styles.description} style={{ marginBottom: '2rem' }}>
                                <span className={styles.subTitle}>{t('us_innovation_title')}</span>:
                                <span>
                                    {' '}
                                    {`${t('us_parraph_201')} ${t('us_parraph_202')}`}{' '}
                                    <span style={{ color: '#0885e6' }}>
                                        {t('us_parraph_202_blue')}
                                    </span>
                                </span>
                            </p>
                            <p className={styles.description}>
                                <span className={styles.subTitle}>
                                    {t('us_personalization_title')}
                                </span>
                                :
                                <span>
                                    {' '}
                                    {t('us_parraph_301')}{' '}
                                    <span style={{ color: '#0885e6' }}>
                                        {t('us_parraph_301_blue')}.
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.textContainerSubContainer}>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.title}>
                                <Image
                                    width={25}
                                    height={25}
                                    src="/images/icons/nosotros/misionicon_1.svg"
                                    alt="valores icono"
                                />

                                <span style={{ marginLeft: '1rem' }}>{t('us_mission_title')}</span>
                                <div className={styles.lineTitle}></div>
                            </h4>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>
                                {t('us_parraph_401')}
                                {'.'}
                                <span style={{ color: '#0885e6' }}> {t('us_parraph_402')}</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.textContainerSubContainer}>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.title}>
                                <Image
                                    width={30}
                                    height={30}
                                    src="/images/icons/nosotros/visionicon.svg"
                                    alt="valores icono"
                                />
                                <span style={{ paddingLeft: '1rem' }}>{t('us_vision_title')}</span>
                            </h4>
                            <div className={styles.lineTitle}></div>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>
                                {t('us_parraph_501')}{' '}
                                <span style={{ color: '#0885e6' }}>{t('us_parraph_501_blue')}</span>{' '}
                                {t('us_parraph_502')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Nosotros;
