import styles from './mobileGraphicService.module.scss';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import ServiceIcon from '../serviceIcon/serviceIcon';

const MobileGraphicServices = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.graphContainer}>
            <h6 className={styles.titleGraphic}>Conocer los servicios</h6>
            <div>
                <div className={styles.firstSection}>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="equipamento" />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>01 | Equipamiento</p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="icon2" />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>02 | Consultoria IT</p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="icon" />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>03 | Seguridad IT</p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="computer" />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>04 | Diseño web</p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileGraphicServices;
