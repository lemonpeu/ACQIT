import styles from "./ServiceText.module.scss";
import ServiceIcon from "../serviceIcon/serviceIcon";

const ServiceText = ({ isModalVisible, name, link, text }) => {
  return (
    <div
      className={`${styles.servicesItemContainer} ${
        !isModalVisible && "servicesItemAnimation"
      }`}
    >
      <ServiceIcon name={name} layout={"fixed"} width={40} height={40} />
      <div
        className={
          styles.descriptionContainer + " " + "descriptionContainerAnimation"
        }
      >
        <p className={styles.titleDescription}>
          <span style={{ fontSize: "1.5rem" }}>04</span> | Diseño web{" "}
          <span>
            <a href={link}>ver +</a>
          </span>
        </p>
        <p className={styles.graphDescription}>{text}</p>
      </div>
    </div>
  );
};

export default ServiceText;
