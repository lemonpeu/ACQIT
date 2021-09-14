import { useState } from 'react';
import BoxUserName from '../../components/common/boxusername/boxusername';
import Footer from '../../components/sections/footer/footer';
import Companies from '../../components/common/companies/companies';
import styles from './equipamento.module.scss';
import Whatsapp from '../../components/common/whatsapp/whatsapp';
import FooterDesktop from '../../components/sections/footer/footerdesktop';
import { useMediaQuery } from '../../components/utils/mediaquery';
import NavMobile from '../../components/sections/nav/navmobile';
import NavDesktop from '../../components/sections/nav/navdesktop';
import ButtonNav from '../../components/common/buttonNav/buttonNav';

const Equipamento = () => {
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
            <div className={styles.main}>
                {!isNavDesktop && <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />}
                <section className={styles.contentContainer}>
                    <h1 className={styles.title}>Equipamento</h1>
                    <p>
                        ACQit contamos con más de diez años de experiencia en el mercado aportando
                        el expertise necesario para identificar oportunidades de mejora asegurando
                        el éxito en tus proyectos y optimizando el funcionamiento. Nuestros
                        convenios y vínculos con primeras marcas nos permiten obtener una amplia
                        gama de productos a un valor competitivo. Definimos y gestionamos un plan de
                        actualización para potenciar y acompañar el crecimiento de tu compañía.
                    </p>
                    <h4 className={styles.aclaration}>
                        ACQit nos encargamos de facilitarte las decisiones de infraestructura.
                    </h4>
                    <div className={styles.companiesContainer}>
                        <h6 className={styles.partnerTitle + ' ' + 'animation-title'}>
                            <span style={{ zIndex: 20, position: 'absolute', height: '100%' }}>
                                Partners
                            </span>
                        </h6>
                        <Companies />
                    </div>
                    <Whatsapp />
                </section>
            </div>
            <BoxUserName className={styles.userContainer} boxUserName name="Paula" />
            {isFooterMobile ? <FooterDesktop /> : <Footer />}
        </div>
    );
};

export default Equipamento;
