import { useState, useEffect } from 'react';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import styles from './disenio.module.scss';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import Modal from '../../components/common/Modal/modal';
import Image from '../../components/common/Image/Image';

const Disenio = () => {
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
                            <h1 className={styles.title}>Diseño web</h1>
                            <p className={styles.description}>
                                ACQit crea sitios web enfatizando el desarrollo y diseño para así
                                obtener un producto acorde a la excelencia que demandan nuestros
                                clientes.
                            </p>
                            <p className={styles.description}>
                                En nuestro equipo aplicamos nuestra experiencia y conocimientos al
                                momento de construir soluciones sólidas orientadas a cada mercado,
                                creando sitios profesionales que logren proyectar confianza
                                apoyándonos en un diseño atractivo y minimalista.
                            </p>
                            <h4 className={styles.aclaration}>
                                Desarrollamos sitios innovadores, funcionales y atractivos enfocados
                                en las necesidades del cliente.
                            </h4>
                            <div className="boxSection">
                                <div
                                    className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
                                >
                                    <BoxUserName
                                        icon
                                        img={'/images/icons/SVG/pcicon.svg'}
                                        text={'Diseño web para desktop (para computadoras)'}
                                    ></BoxUserName>
                                </div>
                                <div
                                    className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
                                >
                                    <BoxUserName
                                        icon
                                        img={'/images/icons/SVG/celphoneicon.svg'}
                                        text={'Diseño web responsive (para celulares y tablets)'}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <BoxUserName className={styles.userContainer} boxUserName />
                    {isFooterMobile ? <FooterDesktop /> : <Footer />}
                </div>
            )}
        </>
    );
};

export default Disenio;
