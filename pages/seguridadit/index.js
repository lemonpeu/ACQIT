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

const SeguridadIT = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');

    const modalConfig = (e) => {
        setIsModalVisible(false);
        setUserName(e);
        sessionStorage.setItem('isModal', false);
    };

    useEffect(() => {
        if (sessionStorage.getItem('isModal')) {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, [isModalVisible]);

    const setLoadingBoolean = () => {
        sessionStorage.setItem('loading', false);
        setIsLoading(false);
    };

    useEffect(() => {
        if (sessionStorage.getItem('loading')) {
            setIsLoading(false);
        } else {
            setTimeout(setLoadingBoolean, 5000);
        }
    }, [isLoading]);

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
                <div id="top" className={styles.wrapper + ' ' + 'main'}>
                    {isModalVisible && <Modal onClick={(e) => modalConfig(e)} />}
                    {isNavDesktop ? (
                        <NavDesktop showSubNav />
                    ) : (
                        isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
                    )}
                    <section className={styles.main}>
                        {!isNavDesktop && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>Seguridad It</h1>
                            <p className={styles.description}>
                                ACQit velamos por el cuidado de la organización, sus datos y sus
                                empleados proveyendo soluciones para proteger la integridad de los
                                ambientes digitales. Nos mantenemos a la vanguardia de las mejores
                                prácticas redefiniendo y ajustando las políticas de seguridad de la
                                empresa.
                            </p>
                            <h4 className={styles.aclaration}>
                                Analizamos y gestionamos los procesos internos y externos
                                garantizando resultados y reduciendo potenciales riesgos
                            </h4>
                            <div className={styles.graphicContainer}>
                                <div className={styles.graphic}>
                                    <div className={styles.iconText}>
                                        <p className={styles.graphicText}>Analizamos</p>
                                        <Image
                                            width={55}
                                            height={55}
                                            layout="fixed"
                                            src="/images/icons/seguridadit/SVG/lupa.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.iconText}>
                                        <p className={styles.graphicText}>Gestionamos</p>
                                        <Image
                                            width={55}
                                            height={55}
                                            layout="fixed"
                                            src="/images/icons/seguridadit/SVG/icon1.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.iconText}>
                                        <p className={styles.graphicText}>Resultados</p>
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
            )}
        </>
    );
};

export default SeguridadIT;
