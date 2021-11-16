import React, { useEffect, useState } from "react";
import Home from "@/components/containers/HomeContainer/Home";
import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";

export default function Principal() {
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
  return <>{isLoading ? <LoadingLogo /> : <Home />}</>;
}
