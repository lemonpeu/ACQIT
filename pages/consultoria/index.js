import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import styles from './consultoria.module.scss';
import IconConsultancy from '../../components/common/iconConsultancy/iconConsultancy';
import Whatsapp from '../../components/common/whatsapp/whatsapp';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';

const Consultoria = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const { t } = useTranslation('common');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');

    const iconsConsultancy = [
        {
            id: 1,
            icon: '/images/icons/SVG/supporticon.svg',
            text: `${t('consultancy_icon_1')}`,
        },
        {
            id: 2,
            icon: '/images/icons/SVG/ejecucionicon.svg',
            text: `${t('consultancy_icon_2')}`,
        },
        {
            id: 3,
            icon: '/images/icons/SVG/controlicon.svg',
            text: `${t('consultancy_icon_3')}`,
        },
        {
            id: 4,
            icon: '/images/icons/SVG/trabajoremoto.svg',
            text: `${t('consultancy_icon_4')}`,
        },
        {
            id: 5,
            icon: '/images/icons/SVG/configuracionicon.svg',
            text: `${t('consultancy_icon_5')}`,
        },
        {
            id: 6,
            icon: '/images/icons/SVG/asesoramientoicon.svg',
            text: `${t('consultancy_icon_6')}`,
        },
        {
            id: 7,
            icon: '/images/icons/SVG/integracionicon.svg',
            text: `${t('consultancy_icon_7')}`,
        },
        {
            id: 8,
            icon: '/images/icons/SVG/reducciondetiempos.svg',
            text: `${t('consultancy_icon_8')}`,
        },
        {
            id: 9,
            icon: '/images/icons/SVG/riesgosicon.svg',
            text: `${t('consultancy_icon_9')}`,
        },
        {
            id: 10,
            icon: '/images/icons/SVG/innovacionicon.svg',
            text: `${t('consultancy_icon_10')}`,
        },
        {
            id: 11,
            icon: '/images/icons/SVG/equipamientoicon.svg',
            text: `${t('consultancy_icon_11')}`,
        },
        {
            id: 12,
            icon: '/images/icons/SVG/analisisicon_1.svg',
            text: `${t('consultancy_icon_12')}`,
        },
    ];
    return (
        <div className={styles.wrapper}>
            {isNavDesktop ? (
                <NavDesktop />
            ) : (
                isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
            )}
            <div className={styles.background}></div>
            <section className={styles.main}>
                {!isNavDesktop && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>{t('consultancy_title')}</h1>
                    <p className={styles.description}>
                        {t('consultancy_p_1')}. {t('consultancy_p_2')}
                    </p>
                    <p className={styles.description}>{t('consultancy_p_3')}.</p>
                    <p className={styles.description}>{t('consultancy_p_4')}.</p>
                    <h4 className={styles.aclaration}>{t('consultancy_aclaration')}.</h4>
                    <div className={styles.iconsContainer}>
                        {iconsConsultancy.map((item, index) => (
                            <IconConsultancy
                                key={index}
                                src={item.icon}
                                alt={item.text}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <Whatsapp />
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Consultoria;
