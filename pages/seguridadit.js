import React, { useState, useEffect } from "react";
import ITSecurityContainer from "@/components/containers/PagesContainer/ITSecurity/ITSecurityContainer";
import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";

const SeguridadIT = () => {
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

  return <>{isLoading ? <LoadingLogo /> : <ITSecurityContainer />}</>;
};

export default SeguridadIT;
