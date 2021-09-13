import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
// import Image from 'next/image';
import styles from './Home.module.scss';
import BoxUserName from '../common/boxusername/boxusername';
import Footer from '../sections/footer/footer';
import { useMediaQuery } from '../utils/mediaquery';
import Whatsapp from '../common/whatsapp/whatsapp';
import LinesGraphic from '../common/linesGraphic/linesGraphic';
import ServicesGraphic from '../common/servicesGraphic/servicesGraphic';
import MobileGraphicServices from '../common/mobileGraphicService/mobileGraphicService';
import NavDesktop from '../sections/nav/navdesktop';
import NavMobile from '../sections/nav/navmobile';
import FooterDesktop from '../sections/footer/footerdesktop';
import ButtonNav from '../common/buttonNav/buttonNav';
import Image from 'next/image';

export default function Home() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const { t } = useTranslation('common');
    let isPageWide = useMediaQuery('(min-width: 1200px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');

    return (
        <div className={styles.wrapper}>
            {isNavDesktop ? (
                <NavDesktop />
            ) : (
                isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
            )}
            <div className={styles.main}>
                {!isNavDesktop && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                <section className={styles.principal}>
                    <video autoPlay muted loop className={styles.myVideo}>
                        <source src="videos/home_1.mp4" type="video/mp4" />
                    </video>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{t('homepage_title')}</h1>
                        <div className={styles.socialIconsContainer}>
                            <div className={styles.imgContainer}>
                                <Image
                                    layout="fixed"
                                    width={40}
                                    height={40}
                                    src="/images/icons/SVG/facebookicon.svg"
                                    alt="facebook"
                                />
                            </div>
                            <div className={styles.imgContainer}>
                                <Image
                                    layout="fixed"
                                    width={40}
                                    height={40}
                                    src="/images/icons/SVG/instagramicon.svg"
                                    alt="instagram"
                                />
                            </div>
                            <div className={styles.imgContainer}>
                                <Image
                                    layout="fixed"
                                    width={40}
                                    height={40}
                                    src="/images/icons/SVG/linkedinicon.svg"
                                    alt="linkedin"
                                />
                            </div>
                        </div>
                    </div>
                    <Whatsapp />
                </section>
                <section className={styles.categories}>
                    <div className={styles.services}>
                        <h4 className={styles.title}>{t('services_title')}</h4>
                        {isPageWide ? <ServicesGraphic /> : <MobileGraphicServices />}
                    </div>
                    <div className={styles.listContainer + ' ' + 'textContainerAnimation'}>
                        <div className={styles.contentlist}>
                            <div className={styles.parraphList}>
                                <p className={styles.principalText}>Entendemos</p>
                                <p className={styles.secundary}>el problema.</p>
                            </div>
                            <div className={styles.parraphList}>
                                <p className={styles.principalText}>Ejecutamos</p>
                                <p className={styles.secundary}>el plan.</p>
                            </div>
                            <div className={styles.parraphList}>
                                <p className={styles.principalText}>Controlamos</p>
                                <p className={styles.secundary}>el resultado.</p>
                            </div>
                            <div className={styles.parraphList}>
                                <p className={styles.principalText}>Diseñamos</p>
                                <p className={styles.secundary}>una solución.</p>
                            </div>
                            <div className={styles.parraphList}>
                                <p className={styles.principalText}>Potenciamos</p>
                                <p className={styles.secundary}>compañía.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <BoxUserName className={styles.boxUserName} boxUserName name="Paula" />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
}
