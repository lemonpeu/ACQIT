import React, { useState, useEffect } from "react";
import WebDesignContainer from "@/components/containers/PagesContainer/WebDesign/WebDesign";
import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";

const Disenio = () => {
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
  };
  return <>{isLoading ? <LoadingLogo /> : <WebDesignContainer />}</>;
};

export default Disenio;
