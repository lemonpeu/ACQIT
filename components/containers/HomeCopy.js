import { useEffect, useState, useCallback, useRef } from 'react';
import styles from './HomeCopy.module.scss';
import { useMediaQuery } from '../utils/mediaquery';
import NavDesktop from '../sections/nav/navdesktop';
import NavMobile from '../sections/nav/navmobile';
import ButtonNav from '../common/buttonNav/buttonNav';
import Modal from '../common/Modal/modal';
import LoadingLogo from '../common/loadingLogo/loadingLogo';
import HeaderHome from './HeaderHome/HeaderHome';
import LinesHomeSection from './LinesHomeSection/LinesHomeSection';
import ServicesHome from './ServicesHome/ServicesHome';
import ScrollNav from '../common/scrollNav/ScrollNav';
import Whatsapp from '../common/whatsapp/whatsapp';
import Footer from '../sections/footer/footer';
import FooterDesktop from '../sections/footer/footerdesktop';
import { useSpring, animated } from 'react-spring';
import { useScrollDown } from '../utils/isScrollDown';
import { SectionsContainer, Section } from 'react-fullpage';
import useWindowSize from '../utils/windowSice';

export default function Home() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [is1thSectionVisible, setIs1thSectionVisible] = useState(false);
    const [is2ndSectionVisible, setIs2ndSectionVisible] = useState(false);
    const [is3rdSectionVisible, setIs3rdSectionVisible] = useState(false);
    const setRef = useRef(null);

    const scrollY = useScrollDown();
    const size = useWindowSize();

    let isPage1200 = useMediaQuery('(min-width: 1200px)');
    let isPage900 = useMediaQuery('(min-width: 900px)');
    let isScreen1000 = useMediaQuery('(min-width: 1000px)');

    useEffect(() => {
        if (localStorage.getItem('isModal')) {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('loading')) {
            setIsLoading(false);
        } else {
            setTimeout(setLoadingBoolean, 5000);
        }
    }, []);

    const modalConfig = (e) => {
        setIsModalVisible(false);
        if (e) {
            setUserName(e);
            localStorage.setItem('name', e);
        }
        localStorage.setItem('isModal', false);
    };

    const setLoadingBoolean = () => {
        localStorage.setItem('loading', false);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading ? (
                <LoadingLogo />
            ) : (
                <>
                    <div className={styles.wrapper + ' ' + 'main home'} style={{ height: '100%' }}>
                        {isPage900 && (
                            <ScrollNav
                                isVisible3={is3rdSectionVisible}
                                isVisible2={is2ndSectionVisible}
                                isVisible1={is1thSectionVisible}
                            />
                        )}
                        {isModalVisible && (
                            <Modal onClose={() => modalConfig()} onClick={(e) => modalConfig(e)} />
                        )}
                        {!isPage900 && isNavVisible && (
                            <NavMobile onClick={() => setIsNavVisible(false)} />
                        )}

                        <div className={styles.main} id="pageContainer" style={{ height: '100%' }}>
                            {!isPage900 && (
                                <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
                            )}

                            <section
                                className={styles.categories + ' ' + 'container'}
                                style={{
                                    scrollSnapType: 'y mandatory',
                                    overflow: 'auto',
                                    height: '100%',
                                }}
                                id="top"
                            >
                                {isPage900 && <NavDesktop />}
                                <div
                                    style={{
                                        scrollSnapAlign: isScreen1000 ? 'center' : '',
                                        height: '100vh',
                                    }}
                                >
                                    <HeaderHome
                                        is1thSectionVisible={(e) => setIs1thSectionVisible(e)}
                                    />
                                </div>
                                <div
                                    style={{
                                        scrollSnapAlign: isScreen1000 ? 'center' : '',
                                        height: isPage1200 ? `${size.height}px` : '100vh',
                                    }}
                                >
                                    <ServicesHome
                                        isModalVisible={isModalVisible}
                                        isPage1200={isPage1200}
                                        is2rdSectionVisible={(e) => setIs2ndSectionVisible(e)}
                                    />
                                </div>
                                <div
                                    style={{
                                        scrollSnapAlign: isScreen1000 ? 'center' : '',
                                        height: '100vh',
                                        alignContent: 'space-between',
                                    }}
                                >
                                    <LinesHomeSection
                                        userName={localStorage.getItem('name') || userName}
                                        isModalVisible={isModalVisible}
                                        isScreen1000={isScreen1000}
                                        isPage1200={isPage1200}
                                        is3rdSectionVisible={(e) => setIs3rdSectionVisible(e)}
                                    />
                                    {isScreen1000 ? (
                                        <FooterDesktop
                                            name={localStorage.getItem('name') || userName}
                                        />
                                    ) : (
                                        <Footer name={localStorage.getItem('name') || userName} />
                                    )}
                                </div>
                            </section>
                        </div>
                        <Whatsapp />
                    </div>
                </>
            )}
        </>
    );
}
