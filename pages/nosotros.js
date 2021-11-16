import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";
import AboutUsContainer from "@/components/containers/PagesContainer/AboutUs/AboutUs";
import { useState, useEffect } from "react";

const Nosotros = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, [isLoading]);

  const setLoadingBoolean = () => {
    localStorage.setItem("loading", false);
    setIsLoading(false);
    let userLang = navigator.language || navigator.userLanguage;
    let firstLetters = userLang.slice(0, 2);
    if (firstLetters === "es") {
      localStorage.setItem("language", true);
    } else {
      localStorage.setItem("language", false);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingLogo />
      ) : (
        <AboutUsContainer videoPath={"/videos/video-nosotros.mp4"} />
      )}
    </>
  );
};

export default Nosotros;
