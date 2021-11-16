import React, { useState, useEffect } from "react";
import HardwareContainer from "@/components/containers/PagesContainer/Hardware/Hardware";
import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";

const Equipamiento = () => {
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
  return <>{isLoading ? <LoadingLogo /> : <HardwareContainer />}</>;
};

export default Equipamiento;
