import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import BoxUserName from '../common/boxusername/boxusername';
import Footer from '../sections/footer/footer';
import { useMediaQuery } from '../utils/mediaquery';
import Whatsapp from '../common/whatsapp/whatsapp';
import ServicesGraphic from '../common/servicesGraphic/servicesGraphic';
import MobileGraphicServices from '../common/mobileGraphicService/mobileGraphicService';
import NavDesktop from '../sections/nav/navdesktop';
import NavMobile from '../sections/nav/navmobile';
import FooterDesktop from '../sections/footer/footerdesktop';
import ButtonNav from '../common/buttonNav/buttonNav';
import Modal from '../common/Modal/modal';
import useWindowSize from '../utils/windowSice';
import Image from '../../components/common/Image/Image';
import LoadingLogo from '../common/loadingLogo/loadingLogo';

export default function Home() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [setRef, visible] = useWindowSize({ threshold: 0.2 });
    let isPage1200 = useMediaQuery('(min-width: 1200px)');
    let isPage900 = useMediaQuery('(min-width: 900px)');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isPage700 = useMediaQuery('(min-width: 700px)');

    const modalConfig = (e) => {
        setIsModalVisible(false);

        if (e) {
            setUserName(e);
        }
        sessionStorage.setItem('isModal', false);
    };

    const setLoadingBoolean = () => {
        sessionStorage.setItem('loading', false);
        setIsLoading(false);
    };

    useEffect(() => {
        if (sessionStorage.getItem('isModal')) {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, [isModalVisible]);

    useEffect(() => {
        if (sessionStorage.getItem('loading')) {
            setIsLoading(false);
        } else {
            setTimeout(setLoadingBoolean, 5000);
        }
    }, [isLoading]);

    const setScreenHeight = () => {
        return size.height + 'px';
    };

    return (
        <>
            {isLoading ? (
                <LoadingLogo />
            ) : (
                <div className={styles.wrapper + ' ' + 'main'}>
                    {isModalVisible && (
                        <Modal onClose={() => modalConfig()} onClick={(e) => modalConfig(e)} />
                    )}
                    {isPage900 ? (
                        <NavDesktop />
                    ) : (
                        isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
                    )}
                    <div className={styles.main}>
                        {!isPage900 && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                        <section className={styles.principal} style={{ height: setScreenHeight() }}>
                            <video autoPlay muted loop className={styles.myVideo}>
                                <source src="videos/home_1.mp4" type="video/mp4" />
                            </video>
                            <div className={`${styles.transition} transition`}></div>
                            <div className={styles.titleContainer}>
                                <h1 className={styles.title}>
                                    Una mirada diferente del mercado IT
                                </h1>
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
                        <section className={styles.categories} id="servicios">
                            <div className={`${styles.transition} transition`}></div>
                            <div
                                className={styles.services}
                                style={{
                                    height: `${
                                        isPage1200 ? size.height - 200 : setScreenHeight()
                                    }px`,
                                }}
                            >
                                <div
                                    className={
                                        styles.categoriesTitleAnimation + ' ' + !isModalVisible &&
                                        'categories-title-animation'
                                    }
                                >
                                    <h4 className={styles.title}>Servicios</h4>
                                </div>
                                {isPage1200 ? (
                                    <ServicesGraphic isModalVisible={isModalVisible} />
                                ) : (
                                    <MobileGraphicServices isModalVisible={isModalVisible} />
                                )}
                            </div>
                            <div
                                className={
                                    !isModalVisible &&
                                    styles.listContainer + ' ' + 'textContainerAnimation'
                                }
                                style={{
                                    height: isFooterMobile
                                        ? size.height - 700 + 'px'
                                        : setScreenHeight(),
                                }}
                            >
                                <div
                                    className={
                                        !isModalVisible &&
                                        styles.contentlist + ' ' + 'lineContainerAnimation'
                                    }
                                >
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
                    <BoxUserName
                        className={styles.boxUserName}
                        boxUserName
                        name={userName && userName}
                    />
                    {isFooterMobile ? <FooterDesktop /> : <Footer />}
                </div>
            )}
        </>
    );
}
