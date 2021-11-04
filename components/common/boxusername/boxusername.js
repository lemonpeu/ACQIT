import styles from "./boxusername.module.scss";
import Image from "../Image/Image";
import ContactForm from "../../sections/ContactForm/ContactForm";

const BoxUserName = (props) => {
  const { icon, name, img, alt, text, boxUserName, autofocus } = props;

  return (
    <section
      className={`${
        boxUserName ? styles.boxUserNameStyle : styles.boxIconText
      } ${styles.containerBox}`}
    >
      <div className={styles.container}>
        {icon && (
          <Image
            width={110}
            height={110}
            layout="fixed"
            className={styles.iconContainer}
            src={img}
            alt={alt}
          />
        )}
        {boxUserName ? (
          <div className={styles.welcomeContainer} id="contact">
            <p className={styles.text}>Hola {name}</p>
            <div className={styles.desktopVersion}>
              <p className={styles.text}>¿Necesitas asistencia?</p>
              <label htmlFor="email" className={styles.text}>
                Dejanos tu e-mail
              </label>
              <ContactForm autofocus={autofocus} />
            </div>
          </div>
        ) : (
          <p className={styles.text}>{text}</p>
        )}
      </div>
    </section>
  );
};

export default BoxUserName;
