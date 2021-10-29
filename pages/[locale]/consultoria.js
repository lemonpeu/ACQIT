import { getI18nPaths } from "../../getI18nPaths";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import styles from "@styles/consultoria.module.scss";

export default function Consultoria() {
  const { t, i18n } = useTranslation("common");

  console.log(styles, "styles");
  return (
    <>
      <div className={styles.logoLoadingContainer}>{t("welcome")}</div>
    </>
  );
}
export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx?.params?.locale,
      ["common"],
      i18nextConfig
    )),
  },
});
