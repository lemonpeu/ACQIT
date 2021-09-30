import React, { useState, useEffect } from 'react';
import styles from './seguridadit.module.scss';
import Whatsapp from '../../components/common/whatsapp/whatsapp';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import Modal from '../../components/common/Modal/modal';
import Image from '../../components/common/Image/Image';
import ResultIcon from '../../public/images/icons/seguridadit/SVG/resulticon';
import GestionamosIcon from '../../public/images/icons/seguridadit/SVG/gestionamosicon';
import LupaIcon from '../../public/images/icons/seguridadit/SVG/lupaicon';
import useWindowSize from '../../components/utils/windowSice';
import { useScrollDown } from '../../components/utils/isScrollDown';

import { useSpring, animated } from 'react-spring';

const SeguridadIT = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimation, setIsAnimation] = useState(false);
    const [userName, setUserName] = useState('');
    const scrollY = useScrollDown();

    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.3 } });
    const size = useWindowSize();

    const modalConfig = (e) => {
        setIsModalVisible(false);
        if (e) {
            setUserName(e);
            localStorage.setItem('name', e);
        }
        localStorage.setItem('isModal', false);
    };

    useEffect(() => {
        if (localStorage.getItem('isModal')) {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, [isModalVisible]);

    const setLoadingBoolean = () => {
        localStorage.setItem('loading', false);
        setIsLoading(false);
    };

    useEffect(() => {
        if (localStorage.getItem('loading')) {
            setIsLoading(false);
        } else {
            setTimeout(setLoadingBoolean, 5000);
        }
    }, [isLoading]);

    useEffect(() => {
        let timer1 = setTimeout(() => setIsAnimation(true), 2000);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            clearTimeout(timer1);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <div className={styles.logoLoadingContainer}>
                    <div className={'imgContainer'}>
                        <Image
                            className={'logoLoading'}
                            width={300}
                            height={100}
                            layout="fixed"
                            src="/images/logopage/logopage.png"
                            alt="logo"
                        />
                    </div>
                </div>
            ) : (
                <animated.div style={props}>
                    <div id="top" className={styles.wrapper + ' ' + 'main'}>
                        {isModalVisible && <Modal onClick={(e) => modalConfig(e)} />}
                        {isNavDesktop ? (
                            <NavDesktop showSubNav isScrollDown={scrollY} />
                        ) : (
                            isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
                        )}
                        <section className={styles.main}>
                            {!isNavDesktop && (
                                <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
                            )}
                            <div
                                className={styles.contentContainer}
                                style={{ minHeight: size.height + 'px' }}
                            >
                                <h1 className={styles.title}>Seguridad It</h1>
                                <p className={styles.description}>
                                    ACQit velamos por el cuidado de la organización, sus datos y sus
                                    empleados proveyendo soluciones para proteger la integridad de
                                    los ambientes digitales. Nos mantenemos a la vanguardia de las
                                    mejores prácticas redefiniendo y ajustando las políticas de
                                    seguridad de la empresa.
                                </p>
                                <h4 className={styles.aclaration}>
                                    Analizamos y gestionamos los procesos internos y externos
                                    garantizando resultados y reduciendo potenciales riesgos
                                </h4>
                                <div className={styles.graphicContainer}>
                                    <div className={styles.graphic}>
                                        <div
                                            className={styles.iconText + ' ' + 'iconTextAnimation'}
                                        >
                                            <p
                                                className={
                                                    styles.graphicText +
                                                    ' ' +
                                                    'securityTextAnimation'
                                                }
                                            >
                                                Analizamos
                                            </p>
                                            <LupaIcon />
                                        </div>
                                        <div
                                            className={styles.iconText + ' ' + 'iconTextAnimation'}
                                        >
                                            <p
                                                className={
                                                    styles.graphicText +
                                                    ' ' +
                                                    'securityTextAnimation'
                                                }
                                            >
                                                Gestionamos
                                            </p>
                                            <GestionamosIcon />
                                        </div>
                                        <div
                                            className={styles.iconText + ' ' + 'iconTextAnimation'}
                                        >
                                            <p
                                                className={
                                                    styles.graphicText +
                                                    ' ' +
                                                    'securityTextAnimation'
                                                }
                                            >
                                                Resultados
                                            </p>
                                            <ResultIcon />
                                        </div>
                                    </div>
                                </div>
                                <Whatsapp />
                            </div>
                        </section>
                        <BoxUserName
                            className={styles.userContainer}
                            boxUserName
                            name={localStorage.getItem('name') || userName}
                        />
                        {isFooterMobile ? <FooterDesktop /> : <Footer />}
                    </div>
                </animated.div>
            )}
        </>
    );
};

export default SeguridadIT;
