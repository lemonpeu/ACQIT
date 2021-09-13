import styles from './servicesGraphic.module.scss';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import ServiceIcon from '../serviceIcon/serviceIcon';
import LinesDesktop from '../../svg/linesDesktop';

const ServicesGraphic = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.graphContainer}>
            <h6 className={styles.titleGraphic}>Conocer los servicios</h6>
            <div style={{ width: '66%', maxWidth: '77rem' }}>
                <LinesDesktop />
                <div className={styles.firstSection}>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="equipamento" layout={'fixed'} width={80} height={80} />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>
                                <span>01</span> | Equipamiento <span>ver +</span>
                            </p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon name="icon2" layout={'fixed'} width={80} height={80} />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>
                                <span>02</span> | Consultoria IT <span>ver +</span>
                            </p>
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
                        <ServiceIcon name="icon" layout={'fixed'} width={80} height={80} />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>
                                <span>03</span> | Seguridad IT <span>ver +</span>
                            </p>
                            <p className={styles.graphDescription}>
                                Proveemos desde notebooks hasta equipos de hiperconvergencia para
                                almacenar u optimizar todos los recursos informáticos necesarios de
                                tu empresa.
                            </p>
                        </div>
                    </div>
                    <div className={styles.servicesItemContainer}>
                        <ServiceIcon
                            name="computer"
                            layout={'fixed'}
                            width={80}
                            height={80}
                            style={{ width: '15rem' }}
                        />
                        <div className={styles.descriptionContainer}>
                            <p className={styles.titleDescription}>
                                <span>04</span> | Diseño web <span>ver +</span>
                            </p>
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

export default ServicesGraphic;
