import { useState, useEffect } from 'react';
import styles from './nosotros.module.scss';
import Footer from '../../components/sections/footer/footer';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import Image from '../../components/common/Image/Image';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import Modal from '../../components/common/Modal/modal';
import NosotrosDescripcion from '../../components/sections/NosotrosDescripcion/NosotrosDescripcion';
import { useScrollDown } from '../../components/utils/isScrollDown';
import useWindowSize from '../../components/utils/windowSice';
import Whatsapp from '../../components/common/whatsapp/whatsapp';

import { useSpring, animated } from 'react-spring';

const Nosotros = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [userName, setUserName] = useState('');
    const scrollY = useScrollDown();
    const size = useWindowSize();

    let isFooterMobile = useMediaQuery('(min-width: 1000px)');
    let isNavDesktop = useMediaQuery('(min-width: 900px)');
    let is1200 = useMediaQuery('(min-width: 1200px)');

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.3 } });

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

    const setText1 = (e) => {
        if (isFooterMobile) {
            setShowText1(e);
        } else {
            setShowText1(e);
            setShowText2(false);
            setShowText3(false);
        }
    };

    const setText2 = (e) => {
        if (isFooterMobile) {
            setShowText2(e);
        } else {
            setShowText1(false);
            setShowText2(e);
            setShowText3(false);
        }
    };

    const setText3 = (e) => {
        if (isFooterMobile) {
            setShowText3(e);
        } else {
            setShowText1(false);
            setShowText2(false);
            setShowText3(e);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('loading')) {
            setIsLoading(false);
        } else {
            setTimeout(setLoadingBoolean, 5000);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('isModal')) {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, [isModalVisible]);

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
                        {isModalVisible && (
                            <Modal onClose={() => modalConfig()} onClick={(e) => modalConfig(e)} />
                        )}
                        {isNavDesktop ? (
                            <NavDesktop showSubNav isScrollDown={scrollY} />
                        ) : (
                            isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
                        )}
                        <video autoPlay muted loop className={styles.myVideo}>
                            <source src="videos/video-nosotros.mp4" type="video/mp4" />
                        </video>
                        <section className={styles.main}>
                            {!isNavDesktop && (
                                <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
                            )}
                            <div className={styles.contentContainer}>
                                <div
                                    style={{
                                        height: is1200 ? `calc(${size.height}px - 20px)` : '100%',
                                    }}
                                >
                                    <div
                                        className={
                                            styles.titleContainer +
                                            ' ' +
                                            styles.titleContainerPrincipal
                                        }
                                    >
                                        <h1 className={styles.title}>Nosotros</h1>
                                        <div className={styles.lineTitle}></div>
                                    </div>
                                    <div className={styles.contentWrapper}>
                                        <NosotrosDescripcion
                                            isFooterMobile={isFooterMobile}
                                            showText1={showText1}
                                            showText2={showText2}
                                            showText3={showText3}
                                            onClick1={(e) => setText1(e)}
                                            onClick2={(e) => setText2(e)}
                                            onClick3={(e) => setText3(e)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.textContainerSubContainer}>
                                    <div className={styles.titleContainer}>
                                        <h4 className={styles.title}>
                                            <Image
                                                width={25}
                                                height={25}
                                                src="/images/icons/nosotros/valoresicoon.svg"
                                                alt="valores icono"
                                            />{' '}
                                            <span style={{ paddingLeft: '1rem' }}>Valores</span>
                                        </h4>
                                        <div className={styles.lineTitle}></div>
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p
                                            className={styles.description}
                                            style={{ marginBottom: '2rem' }}
                                        >
                                            Nuestros valores definen quiénes somos, cómo trabajamos
                                            y cómo es nuestro equipo. Nos gusta trabajar con el
                                            dinamismo necesario para poder optimizar los recursos de
                                            nuestros clientes.&nbsp;
                                            <span style={{ color: '#0885e6' }}>
                                                Escuchar, interpretar, son palabras que nos destacan
                                                y nos ayudan a crear vínculos, incluso más allá de
                                                los laborales.
                                            </span>
                                        </p>
                                        <p
                                            className={styles.description}
                                            style={{ marginBottom: '2rem' }}
                                        >
                                            <span className={styles.subTitle}>Innovación</span>:
                                            <span>
                                                &nbsp;nuestra pasión por la tecnología y experiencia
                                                nos enseñan que este mercado se encuentra en
                                                constante crecimiento. Nos mantenemos en&nbsp;
                                                <span style={{ color: '#0885e6' }}>
                                                    constante estudio y búsqueda de las últimas
                                                    tendencias, para brindar las respuestas más
                                                    eficientes y eficaces para su empresa.
                                                </span>
                                            </span>
                                        </p>
                                        <p className={styles.description}>
                                            <span className={styles.subTitle}>Personalización</span>
                                            :
                                            <span>
                                                &nbsp;nuestra dinámica de trabajo es completamente
                                                personal, dándole a nuestros clientes un trato post
                                                venta que asegure el&nbsp;
                                                <span style={{ color: '#0885e6' }}>
                                                    seguimiento y análisis de rendimiento de cada
                                                    proyecto.
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.textContainerSubContainer}>
                                    <div className={styles.titleContainer}>
                                        <h4 className={styles.title}>
                                            <Image
                                                width={25}
                                                height={25}
                                                src="/images/icons/nosotros/misionicon_1.svg"
                                                alt="valores icono"
                                            />

                                            <span style={{ marginLeft: '1rem' }}>Mision</span>
                                            <div className={styles.lineTitle}></div>
                                        </h4>
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p className={styles.description}>
                                            ACQit nace para llenar un vacío en los servicios
                                            actuales del mercado ya que ningún es un servicio
                                            integral, sino que todos son tratados como problemas
                                            separados.
                                            <span style={{ color: '#0885e6' }}>
                                                Nosotros como compañía entendemos que todo tiene un
                                                vínculo y la mejor forma de tratarlo es como un
                                                único objetivo.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.textContainerSubContainer}>
                                    <div className={styles.titleContainer}>
                                        <h4 className={styles.title}>
                                            <Image
                                                width={30}
                                                height={30}
                                                src="/images/icons/nosotros/visionicon.svg"
                                                alt="valores icono"
                                            />
                                            <span style={{ paddingLeft: '1rem' }}>Visión</span>
                                        </h4>
                                        <div className={styles.lineTitle}></div>
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p className={styles.description}>
                                            ACQit busca ser una empresa líder en el mercado,
                                            ofreciendo&nbsp;
                                            <span style={{ color: '#0885e6' }}>
                                                servicios de excelencia que ponen su foco en la
                                                innovación y personalización.&nbsp;
                                            </span>
                                            Estamos convencidos de que, una buena experiencia para
                                            nuestros clientes, es la forma correcta para que nos
                                            sigan eligiéndolos sus socios esenciales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Whatsapp />
                        </section>
                        {isFooterMobile ? (
                            <FooterDesktop
                                name={localStorage.getItem('name') || userName}
                                style={{ zIndex: 0 }}
                            />
                        ) : (
                            <Footer name={localStorage.getItem('name') || userName} />
                        )}
                    </div>
                </animated.div>
            )}
        </>
    );
};

export default Nosotros;
