import ServiceText from '../../common/ServiceText/ServiceText';
import styles from './ServicesTextDesktop.module.scss';

const ServicesTextDesktop = ({ isModalVisible }) => {
    const textContent = [
        {
            id: 1,
            name: 'equipamiento',
            title: 'Equipamiento',
            text: 'Proveemos desde notebooks hasta equipos de hiperconvergencia para almacenar u optimizar todos los recursos informáticos necesarios de tu empresa.',
            link: '/equipamiento',
        },
        {
            id: 2,
            name: 'diamond',
            title: 'Consultoria IT',
            text: 'Nuestro equipo se encarga de gestionar, administrar y optimizar tus sistemas y procesos enfocándonos en obtener los mejores resultados.',
            link: '/consultoria',
        },
        {
            id: 4,
            name: 'computer',
            title: 'Diseño web',
            text: 'Tu sitio web al alcance de tus manos con diseño y responsive sujeto a las necesitadas de cada cliente.',
            link: '/disenio',
        },
        {
            id: 3,
            name: 'icon',
            title: 'Seguridad IT',
            text: 'Protegemos tu organización y tus datos de cualquier ciberataque haciendo uso de herramientas de control de primer nivel.',
            link: '/seguridadit',
        },
    ];
    return (
        <div
            className={`${styles.textContainerAnimation} ${
                !isModalVisible && 'equipamentoContainer'
            }`}
        >
            {textContent.map((item) => (
                <ServiceText key={item.id} {...item} isModalVisible={isModalVisible} />
            ))}
        </div>
    );
};

export default ServicesTextDesktop;
