import styles from './servicesGraphic.module.scss';
import React, { useState } from 'react';
import ServiceIcon from '../serviceIcon/serviceIcon';
import LinesDesktop from '../../svg/linesDesktop';
import Image from '../Image/Image';

const ServicesGraphic = ({ isModalVisible, fullScreen }) => {
    const [showServices, setShowServices] = useState(false);

    const setFullScreen = () => {
        setShowServices(true);
        fullScreen();
    };

    return (
        <div className={styles.graphContainer}>
            <div className={styles.titleContainer}>
                <h6 className={`${styles.titleGraphic} ${!isModalVisible && 'animation-title'}`}>
                    <span style={{ zIndex: 20, position: 'absolute', height: '100%' }}>
                        Conocer los servicios
                    </span>
                </h6>
                <button onClick={setFullScreen} className="button-graphic-animation">
                    <Image
                        layout="fixed"
                        width={60}
                        height={60}
                        src="/images/icons/home/SVG/plusicon.svg"
                        alt="Expandir"
                    />
                </button>
            </div>
            {showServices && (
                <div style={{ width: '66%', maxWidth: '77rem' }}>
                    <LinesDesktop showAnimation={showServices} />
                    <div
                        className={`${styles.textContainerAnimation} ${
                            !isModalVisible && 'equipamentoContainer'
                        }`}
                    >
                        <div className={styles.firstSection}>
                            <div
                                className={`${styles.servicesItemContainer} ${
                                    !isModalVisible && 'servicesItemAnimation'
                                }`}
                            >
                                <ServiceIcon
                                    name="equipamento"
                                    layout={'fixed'}
                                    width={60}
                                    height={60}
                                />
                                <div
                                    className={
                                        styles.descriptionContainer +
                                        ' ' +
                                        'descriptionContainerAnimation'
                                    }
                                >
                                    <p className={styles.titleDescription}>
                                        <span style={{ fontSize: '1.5rem' }}>01</span> |
                                        Equipamiento{' '}
                                        <span>
                                            <a href="https://3dimpresion.com.ar/Peu/equipamento.html">
                                                ver +
                                            </a>
                                        </span>
                                    </p>
                                    <p className={styles.graphDescription}>
                                        Proveemos desde notebooks hasta equipos de hiperconvergencia
                                        para almacenar u optimizar todos los recursos informáticos
                                        necesarios de tu empresa.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${styles.servicesItemContainer} ${
                                    !isModalVisible && 'servicesItemAnimation'
                                }`}
                            >
                                <ServiceIcon name="icon2" layout={'fixed'} width={60} height={60} />
                                <div
                                    className={
                                        styles.descriptionContainer +
                                        ' ' +
                                        'descriptionContainerAnimation'
                                    }
                                >
                                    <p className={styles.titleDescription}>
                                        <span style={{ fontSize: '1.5rem' }}>02</span> | Consultoria
                                        IT{' '}
                                        <span>
                                            <a href="https://3dimpresion.com.ar/Peu/consultoria.html">
                                                ver +
                                            </a>
                                        </span>
                                    </p>
                                    <p className={styles.graphDescription}>
                                        Nuestro equipo se encarga de gestionar, administrar y
                                        optimizar tus sistemas y procesos enfocándonos en obtener
                                        los mejores resultados.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondSection}>
                            <div
                                className={`${styles.servicesItemContainer} ${
                                    !isModalVisible && 'servicesItemAnimation'
                                }`}
                            >
                                <ServiceIcon name="icon" layout={'fixed'} width={60} height={60} />
                                <div
                                    className={
                                        styles.descriptionContainer +
                                        ' ' +
                                        'descriptionContainerAnimation'
                                    }
                                >
                                    <p className={styles.titleDescription}>
                                        <span style={{ fontSize: '1.5rem' }}>03</span> | Seguridad
                                        IT{' '}
                                        <span>
                                            <a href="https://3dimpresion.com.ar/Peu/seguridadit.html">
                                                ver +
                                            </a>
                                        </span>
                                    </p>
                                    <p className={styles.graphDescription}>
                                        Protegemos tu organización y tus datos de cualquier
                                        ciberataque haciendo uso de herramientas de control de
                                        primer nivel.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${styles.servicesItemContainer} ${
                                    !isModalVisible && 'servicesItemAnimation'
                                }`}
                            >
                                <ServiceIcon
                                    name="computer"
                                    layout={'fixed'}
                                    width={60}
                                    height={60}
                                    style={{ width: '12rem' }}
                                />
                                <div
                                    className={
                                        styles.descriptionContainer +
                                        ' ' +
                                        'descriptionContainerAnimation'
                                    }
                                >
                                    <p className={styles.titleDescription}>
                                        <span style={{ fontSize: '1.5rem' }}>04</span> | Diseño web{' '}
                                        <span>
                                            <a href="https://3dimpresion.com.ar/Peu/disenio.html">
                                                ver +
                                            </a>
                                        </span>
                                    </p>
                                    <p className={styles.graphDescription}>
                                        Tu sitio web al alcance de tus manos con diseño y responsive
                                        sujeto a las necesitadas de cada cliente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesGraphic;
