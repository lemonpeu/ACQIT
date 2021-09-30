import ServiceText from '../../common/ServiceText/ServiceText';
import styles from './ServicesTextDesktop.module.scss';

const ServicesTextDesktop = ({ isModalVisible }) => {
    const textContent = [
        {
            id: 1,
            name: 'equipamento',
            title: 'Equipamiento',
            text: 'Proveemos desde notebooks hasta equipos de hiperconvergencia para almacenar u optimizar todos los recursos informáticos necesarios de tu empresa.',
            link: 'https://3dimpresion.com.ar/Peu/equipamento.html',
        },
        {
            id: 2,
            name: 'diamond',
            title: 'Consultoria IT',
            text: 'Nuestro equipo se encarga de gestionar, administrar y optimizar tus sistemas y procesos enfocándonos en obtener los mejores resultados.',
            link: 'https://3dimpresion.com.ar/Peu/consultoria.html',
        },
        {
            id: 3,
            name: 'computer',
            title: 'Seguridad IT',
            text: 'Protegemos tu organización y tus datos de cualquier ciberataque haciendo uso de herramientas de control de primer nivel.',
            link: 'https://3dimpresion.com.ar/Peu/seguridadit.html',
        },
        {
            id: 4,
            name: 'icon',
            title: 'Diseño web',
            text: 'Tu sitio web al alcance de tus manos con diseño y responsive sujeto a las necesitadas de cada cliente.',
            link: 'https://3dimpresion.com.ar/Peu/disenio.html',
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
