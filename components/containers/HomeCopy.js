import { useEffect, useState, useRef } from 'react';
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
import IsVisible from '../utils/isVisible';
import { useSpring, animated } from 'react-spring';

export default function Home() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [is1thSectionVisible, setIs1thSectionVisible] = useState(false);
    const [is2ndSectionVisible, setIs2ndSectionVisible] = useState(false);
    const [is3rdSectionVisible, setIs3rdSectionVisible] = useState(false);

    let isPage1200 = useMediaQuery('(min-width: 1200px)');
    let isPage900 = useMediaQuery('(min-width: 900px)');
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.3 } });

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
                <animated.div style={props}>
                    <div id="top" className={styles.wrapper + ' ' + 'main home'}>
                        <ScrollNav
                            isVisible3={is3rdSectionVisible}
                            isVisible2={is2ndSectionVisible}
                            isVisible1={is1thSectionVisible}
                        />
                        {isModalVisible && (
                            <Modal onClose={() => modalConfig()} onClick={(e) => modalConfig(e)} />
                        )}
                        {isPage900 ? (
                            <NavDesktop showSubNav />
                        ) : (
                            isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
                        )}
                        <div className={styles.main}>
                            {!isPage900 && (
                                <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
                            )}
                            <HeaderHome is1thSectionVisible={(e) => setIs1thSectionVisible(e)} />
                            <section className={styles.categories}>
                                <div className={`${styles.transition} transition`}></div>
                                <ServicesHome
                                    isModalVisible={isModalVisible}
                                    isPage1200={isPage1200}
                                    is2rdSectionVisible={(e) => setIs2ndSectionVisible(e)}
                                />
                                <LinesHomeSection
                                    userName={localStorage.getItem('name') || userName}
                                    isModalVisible={isModalVisible}
                                    isFooterMobile={isFooterMobile}
                                    isPage1200={isPage1200}
                                    is3rdSectionVisible={(e) => setIs3rdSectionVisible(e)}
                                />
                            </section>
                        </div>
                        <Whatsapp />
                    </div>
                </animated.div>
            )}
        </>
    );
}
