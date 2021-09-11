import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import styles from './disenio.module.scss';
import pCIcon from '../../public/images/icons/SVG/pcicon.svg';
import cellphone from '../../public/images/icons/SVG/celphoneicon.svg';
import Image from 'next/image';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import ButtonNav from '../../components/common/buttonNav/buttonNav';

const Disenio = () => {
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
                    <h1 className={styles.title}>{t('diseniotitle')}</h1>
                    <p className={styles.description}>{t('diseniparraph_1')}.</p>
                    <p className={styles.description}>{t('diseniparraph_2')}.</p>
                    <h4 className={styles.aclaration}>{t('diseniparraph_3')}.</h4>
                    <BoxUserName icon img={pCIcon} text={t('box_desktop')}></BoxUserName>
                    <BoxUserName icon img={cellphone} text={t('box_mobile')} />
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Disenio;
