import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './seguridadit.module.scss';
import Whatsapp from '../../components/common/whatsapp/whatsapp';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import Image from 'next/image';

const SeguridadIT = () => {
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
                    <h1 className={styles.title}>{t('security_title')}</h1>
                    <p className={styles.description}>
                        {t('security_p_1')}. {t('security_p_2')}.
                    </p>
                    <h4 className={styles.aclaration}>{t('security_aclaration')}</h4>
                    <div className={styles.graphicContainer}>
                        <div className={styles.graphic}>
                            <div className={styles.iconText}>
                                <p className={styles.graphicText}>{t('security_graph_1')}</p>
                                <Image
                                    width={55}
                                    height={55}
                                    layout="fixed"
                                    src="/images/icons/seguridadit/SVG/lupa.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.iconText}>
                                <p className={styles.graphicText}>{t('security_graph_2')}</p>
                                <Image
                                    width={55}
                                    height={55}
                                    layout="fixed"
                                    src="/images/icons/seguridadit/SVG/icon1.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.iconText}>
                                <p className={styles.graphicText}>{t('security_graph_3')}</p>
                                <Image
                                    width={55}
                                    height={55}
                                    layout="fixed"
                                    src="/images/icons/seguridadit/SVG/icon2.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <Whatsapp />
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default SeguridadIT;
