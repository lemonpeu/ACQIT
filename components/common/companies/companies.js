import { companiesLogos } from "../../utils/companiesArray";
import styles from "./companies.module.scss";
import Image from "../Image/Image";
import useWindowSize from "../../utils/windowSice";
import { useEffect, useState } from "react";
import PlusIcon from "../../../public/images/icons/home/SVG/plusicon";

const Companies = () => {
  const [totalArray, setTotalArray] = useState(false);
  const [companies, setCompanies] = useState([]);
  const size = useWindowSize();

  const getRandomItems = () => {
    let items = companiesLogos.sort(() => Math.random() - 0.5);
    setCompanies(items);
  };

  useEffect(() => {
    getRandomItems();
  }, []);

  const setImageSize = () => {
    if (size.width > 700 && size.width < 900) {
      return { width: 150, height: 100 };
    } else if (size.width > 900 && size.width < 1500) {
      return { width: 180, height: 150 };
    } else if (size.width > 1700) {
      return { width: 200, height: 170 };
    } else {
      return { width: 100, height: 100 };
    }
  };

  const setArrayCount = () => {
    if (size.width > 700 && size.width < 900) {
      return 12;
    } else if (size.width > 900) {
      return 24;
    } else {
      return 9;
    }
  };

  return (
    <div
      className={`${
        totalArray ? `${styles.fullWrapper}` : styles.wrapper
      } companiesContainer`}
    >
      <div
        className={`${
          totalArray
            ? `${styles.companiesFull + " " + "fullWrapperCompany"}`
            : styles.companiesContainer
        } companiesAnimation`}
      >
        {companies
          .slice(0, totalArray ? companiesLogos.length : setArrayCount())
          .map((item, key) => (
            <div className={styles.imgContainer} key={key}>
              <Image
                key={key}
                layout={"intrinsic"}
                width={setImageSize().width}
                height={setImageSize().height}
                src={`/${item.url}`}
                alt={item.title}
              />
            </div>
          ))}
      </div>
      <button
        className={styles.plusIconContainer + " " + "companiesAnimation"}
        onClick={() => setTotalArray(true)}
      >
        <PlusIcon
          line={
            totalArray
              ? "M 28.77 20.67 H 21 v 0 h -1.6 v 0 h -7.78 v -1.58 h 7.78 v 0 H 21 v 0 h 7.78 z"
              : "M28.77 20.67H21v7.84h-1.6v-7.84h-7.78v-1.58h7.78v-7.73H21v7.73h7.78z"
          }
        />
      </button>
    </div>
  );
};

export default Companies;
