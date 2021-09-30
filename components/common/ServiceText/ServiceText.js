import styles from "./ServiceText.module.scss";
import ServiceIcon from "../serviceIcon/serviceIcon";

const ServiceText = ({ isModalVisible, name, link, text, title, id }) => {
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
          <span style={{ fontSize: "1.3rem" }}>0{id}</span> |{" "}
          <a href={link} style={{ lineHeight: 1.5 }}>
            {title}
          </a>
          <span className={styles.seeMore}>
            <a href={link}>ver +</a>
          </span>
        </p>
        <p className={styles.graphDescription}>{text}</p>
      </div>
    </div>
  );
};

export default ServiceText;
