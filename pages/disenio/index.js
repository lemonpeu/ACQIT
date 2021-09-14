import { useState } from 'react';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import styles from './disenio.module.scss';
import pCIcon from '../../public/images/icons/SVG/pcicon.svg';
import cellphone from '../../public/images/icons/SVG/celphoneicon.svg';
import Image from 'next/image';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import ButtonNav from '../../components/common/buttonNav/buttonNav';
import { motion } from 'framer-motion';

const Disenio = () => {
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
                    <h1 className={styles.title}>Diseño web</h1>
                    <p className={styles.description}>
                        ACQit crea sitios web enfatizando el desarrollo y diseño para así obtener un
                        producto acorde a la excelencia que demandan nuestros clientes.
                    </p>
                    <p className={styles.description}>
                        En nuestro equipo aplicamos nuestra experiencia y conocimientos al momento
                        de construir soluciones sólidas orientadas a cada mercado, creando sitios
                        profesionales que logren proyectar confianza apoyándonos en un diseño
                        atractivo y minimalista.
                    </p>
                    <h4 className={styles.aclaration}>
                        Desarrollamos sitios innovadores, funcionales y atractivos enfocados en las
                        necesidades del cliente.
                    </h4>
                    <div className="boxSection">
                        <BoxUserName
                            icon
                            img={pCIcon}
                            text={'Diseño web para desktop (para computadoras)'}
                        ></BoxUserName>
                        <BoxUserName
                            icon
                            img={cellphone}
                            text={'Diseño web responsive (para celulares y tablets)'}
                        />
                    </div>
                </div>
            </section>
            <BoxUserName className={styles.userContainer} boxUserName />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Disenio;
