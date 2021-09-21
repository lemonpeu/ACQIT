import { useEffect, useState, useRef } from 'react';
import styles from './HomeCopy.module.scss';
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
import LineContainer from '../sections/LineContainer/LineContainer';
import useOnScreen from '../utils/isVisible';

export default function Home() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const ref = useRef();
    const [setRef, visible] = useOnScreen({ threshold: 0.2 });
    const size = useWindowSize();
    let isPage1200 = useMediaQuery('(min-width: 1200px)');
    let isPage900 = useMediaQuery('(min-width: 900px)');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isPage768 = useMediaQuery('(min-width: 768px)');

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

    const videos = ['videos/home_1.mp4', 'videos/home_2.mp4', 'videos/home_3.mp4'];

    const getRandomVideo = () => {
        return videos.sort(() => Math.random() - 0.5);
    };

    return (
        <>
            {isLoading ? (
                <LoadingLogo />
            ) : (
                <div id="top" className={styles.wrapper + ' ' + 'main'}>
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
                                <source src={getRandomVideo().slice(0, 1)} type="video/mp4" />
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
                        <div className={styles.categories}>
                            <div className={`${styles.transition} transition`}></div>
                            <section
                                className={styles.serviciosContainer}
                                id="servicios"
                                style={{
                                    height: setScreenHeight(),
                                }}
                            >
                                <div className={styles.services}>
                                    <div
                                        className={
                                            styles.categoriesTitleAnimation +
                                                ' ' +
                                                !isModalVisible && 'categories-title-animation'
                                        }
                                    >
                                        <h4 className={styles.title}>Servicios</h4>
                                    </div>
                                    {isPage1200 ? (
                                        <ServicesGraphic
                                            fullScreen={() => setIsFullScreen(true)}
                                            isModalVisible={isModalVisible}
                                        />
                                    ) : (
                                        <MobileGraphicServices isModalVisible={isModalVisible} />
                                    )}
                                </div>
                            </section>
                            <section
                                className={styles.linesGraphicContainer}
                                style={{
                                    height: setScreenHeight(),
                                }}
                                ref={setRef}
                            >
                                {visible && <LineContainer isModalVisible={isModalVisible} />}
                            </section>
                        </div>
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
