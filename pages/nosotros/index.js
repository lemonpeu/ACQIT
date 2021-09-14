import { useState } from 'react';
import styles from './nosotros.module.scss';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import Image from 'next/image';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import { myLoader } from '../../components/utils/myLoader';

const Nosotros = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
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
                    <div className={styles.titleContainer + ' ' + styles.titleContainerPrincipal}>
                        <h1 className={styles.title + ' ' + styles.principalTitle}>Nosotros</h1>
                        <div className={styles.lineTitle}></div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imgContainer}>
                            <Image
                                layout="fixed"
                                width={isFooterMobile ? 200 : 130}
                                height={isFooterMobile ? 190 : 120}
                                src="/images/extra/SVG/nosotros/line1.png"
                                alt="aaaaaa"
                            />
                            <div className={styles.imgUsContainer}>
                                <Image
                                    layout="fixed"
                                    width={isFooterMobile ? 200 : 130}
                                    height={isFooterMobile ? 190 : 120}
                                    src="/images/extra/SVG/nosotros/line2.png"
                                    alt="aaaaaa"
                                />
                                <div className={styles.thirdIcon}>
                                    <Image
                                        layout="fixed"
                                        width={isFooterMobile ? 200 : 130}
                                        height={isFooterMobile ? 190 : 120}
                                        src="/images/extra/SVG/nosotros/line3.png"
                                        alt="aaaaaa"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>
                                ACQit es una empresa con
                                <span style={{ color: '#0885e6' }}>
                                    más de 10 años de experiencia en el desarrollo de soluciones
                                    tecnológicas y asesoramiento
                                </span>
                                .
                            </p>
                            <p className={styles.description}>
                                Nuestro compromiso y seguimiento personalizado logran una respuesta
                                inmediata reduciendo los tiempos de análisis y ejecución. Nuestro
                                equipo cuenta con una larga experiencia dentro de multinacionales,
                                lo que nos permitió desarrollarnos en empresas de gran envergadura.
                            </p>
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
                            <p className={styles.description} style={{ marginBottom: '2rem' }}>
                                Nuestros valores definen quiénes somos, cómo trabajamos y cómo es
                                nuestro equipo. Nos gusta trabajar con el dinamismo necesario para
                                poder optimizar los recursos de nuestros clientes
                                <span style={{ color: '#0885e6' }}>
                                    Escuchar, interpretar, son palabras que nos destacan y nos
                                    ayudan a crear vínculos, incluso más allá de los laborales.
                                </span>
                            </p>
                            <p className={styles.description} style={{ marginBottom: '2rem' }}>
                                <span className={styles.subTitle}>Innovación</span>:
                                <span>
                                    nuestra pasión por la tecnología y experiencia nos enseñan que
                                    este mercado se encuentra en constante crecimiento. Nos
                                    mantenemos en
                                    <span style={{ color: '#0885e6' }}>
                                        constante estudio y búsqueda de las últimas tendencias, para
                                        brindar las respuestas más eficientes y eficaces para su
                                        empresa
                                    </span>
                                </span>
                            </p>
                            <p className={styles.description}>
                                <span className={styles.subTitle}>Personalización</span>:
                                <span>
                                    nuestra dinámica de trabajo es completamente personal, dándole a
                                    nuestros clientes un trato post venta que asegure el
                                    <span style={{ color: '#0885e6' }}>
                                        seguimiento y análisis de rendimiento de cada proyecto.
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
                                ACQit nace para llenar un vacío en los servicios actuales del
                                mercado ya que ningún es un servicio integral, sino que todos son
                                tratados como problemas separados.
                                <span style={{ color: '#0885e6' }}>
                                    {' '}
                                    Nosotros como compañía entendemos que todo tiene un vínculo y la
                                    mejor forma de tratarlo es como un único objetivo
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
                                ACQit busca ser una empresa líder en el mercado, ofreciendo
                                <span style={{ color: '#0885e6' }}>
                                    servicios de excelencia que ponen su foco en la innovación y
                                    personalización.
                                </span>
                                Estamos convencidos de que, una buena experiencia para nuestros
                                clientes, es la forma correcta para que nos sigan eligiéndolos sus
                                socios esenciales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Nosotros;
