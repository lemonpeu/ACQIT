import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
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
    const { t } = useTranslation('common');
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
                    <h1 className={styles.title}>{t('equipment_title')}</h1>
                    <p>{`${t('equipment_1')}. ${t('equipment_2')}. 
                    ${t('equipment_3')}.`}</p>
                    <h4 className={styles.aclaration}>{t('equipment_h4')}.</h4>
                    <div className={styles.companiesContainer}>
                        <h6 className={styles.partnerTitle}>Partners</h6>
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
