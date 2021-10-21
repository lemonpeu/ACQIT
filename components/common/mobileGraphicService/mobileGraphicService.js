import styles from "./mobileGraphicService.module.scss";
import React from "react";
import ServiceIcon from "../serviceIcon/serviceIcon";
import Link from "next/link";

const MobileGraphicServices = ({ isModalVisible }) => {
  return (
    <div className={styles.graphContainer}>
      <div style={{ overflow: "hidden" }}>
        <div
          className={`${styles.textContainerAnimation}  ${
            !isModalVisible && "equipamentoContainerAnimation"
          }`}
        >
          <div className={styles.firstSection}>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="equipamiento" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/equipamiento" passHref>
                  <p className={styles.titleDescription}>
                    01 | Equipamiento{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>
                <p className={styles.graphDescription}>
                  Proveemos desde notebooks hasta equipos de hiperconvergencia
                  para almacenar u optimizar todos los recursos informáticos
                  necesarios de tu empresa.
                </p>
              </div>
            </div>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="icon2" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/consultoria" passHref>
                  <p className={styles.titleDescription}>
                    02 | Consultoria IT{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  Nuestro equipo se encarga de gestionar, administrar y
                  optimizar tus sistemas y procesos enfocándonos en obtener los
                  mejores resultados.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.secondSection}  ${
              !isModalVisible && "equipamentoContainerSecond"
            }`}
          >
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="icon" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/seguridadit" passHref>
                  <p className={styles.titleDescription}>
                    03 | Seguridad IT{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  Tu sitio web al alcance de tus manos con diseño y responsive
                  sujeto a las necesitadas de cada cliente
                </p>
              </div>
            </div>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="computer" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/disenio" passHref>
                  <p className={styles.titleDescription}>
                    04 | Diseño web{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  Protegemos tu organización y tus datos de cualquier
                  ciberataque haciendo uso de herramientas de control de primer
                  nivel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGraphicServices;
