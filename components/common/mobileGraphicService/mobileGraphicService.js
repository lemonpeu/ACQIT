import styles from "./mobileGraphicService.module.scss";
import React from "react";
import ServiceIcon from "../serviceIcon/serviceIcon";

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
                <p className={styles.titleDescription}>01 | Equipamiento</p>
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
                <p className={styles.titleDescription}>02 | Consultoria IT</p>
                <p className={styles.graphDescription}>
                  Proveemos desde notebooks hasta equipos de hiperconvergencia
                  para almacenar u optimizar todos los recursos informáticos
                  necesarios de tu empresa.
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
                <p className={styles.titleDescription}>03 | Seguridad IT</p>
                <p className={styles.graphDescription}>
                  Proveemos desde notebooks hasta equipos de hiperconvergencia
                  para almacenar u optimizar todos los recursos informáticos
                  necesarios de tu empresa.
                </p>
              </div>
            </div>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="computer" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <p className={styles.titleDescription}>04 | Diseño web</p>
                <p className={styles.graphDescription}>
                  Proveemos desde notebooks hasta equipos de hiperconvergencia
                  para almacenar u optimizar todos los recursos informáticos
                  necesarios de tu empresa.
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
