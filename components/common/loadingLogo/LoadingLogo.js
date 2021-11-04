import styles from "./LoadingLogo.module.scss";
import Image from "../Image/Image";

const LoadingLogo = () => {
  return (
    <div
      className={styles.logoLoadingContainer + " " + "logoContainerAnimation"}
    >
      <div className={"imgContainer"}>
        <Image
          className={"logoLoading"}
          width={300}
          height={100}
          layout="fixed"
          src="/images/logopage/logopage.png"
          alt="logo"
        />
        <p className={styles.text}>UNA MIRADA DIFERENTE DEL MERCADO IT.</p>
      </div>
    </div>
  );
};

export default LoadingLogo;
