import styles from "./NosotrosText.module.scss";

const NosotrosText = ({
  text1,
  text2,
  text3,
  showText1,
  showText2,
  showText3,
}) => {
  const renderText = () => {
    if (text1) {
      return (
        <div
          className={`${styles.textContainer} ${
            showText1 ? "textNosotros" : ""
          }`}
        >
          <p className={styles.description}>
            ACQit es una empresa con&nbsp;
            <span style={{ color: "#0885e6" }}>
              más de 10 años de experiencia en el desarrollo de soluciones
              tecnológicas y asesoramiento
            </span>
            .
          </p>
          <p className={styles.description}>
            Nuestro compromiso y seguimiento personalizado logran una respuesta
            inmediata reduciendo los tiempos de análisis y ejecución. Nuestro
            equipo cuenta con una larga experiencia dentro de multinacionales,
            lo que nos permitió desarrollarnos en empresas de gran envergadura.
          </p>
        </div>
      );
    } else if (text2) {
      return (
        <div className={`${styles.textContainer} ${showText2 ? "third" : ""}`}>
          <p className={styles.description}>
            <span style={{ color: "#0885e6" }}>
              Escuchar e interiorizarnos con la problemática de nuestros
              clientes&nbsp;
            </span>
            es una cualidad que nos destaca y nos convirtiéndonos en socios
            esenciales al ofrecerles soluciones inspiradoras e innovadoras.
            Proveemos acceso a productos y servicios de calidad con la más
            avanzada tecnología para afrontar los desafíos y aprovechar las
            oportunidades que vienen.
          </p>
          <p className={styles.description}>
            La innovación, los procesos de trabajo, la planificación y la
            organización forman parte de los pilares de la empresa. Son los que
            nos permiten un abordaje diferente y único para las problemáticas
            que se nos presenten, llevados al frente bajo estrictas políticas de
            trabajo y excelencia que cada cliente merece.
          </p>
        </div>
      );
    } else if (text3) {
      return (
        <div className={`${styles.textContainer} ${showText3 ? "third" : ""}`}>
          <p className={styles.description}>
            Nos gustan los desafíos, el dinamismo y ponernos a prueba
            constantemente&nbsp;
            <span style={{ color: "#0885e6" }}>
              realizándolo con pasión&nbsp;
            </span>
            y superando ampliamente las expectativas de nuestros clientes, esto
            nos define como compañía.
          </p>
          <p className={styles.description}>
            Vivimos en constante crecimiento gracias a nuestra curiosidad por
            las nuevas tendencias y tecnologías que nos ayudan a ser más ágiles.
          </p>
        </div>
      );
    }
  };

  return <>{renderText()}</>;
};

export default NosotrosText;
