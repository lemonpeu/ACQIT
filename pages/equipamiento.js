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
  };
  return <>{isLoading ? <LoadingLogo /> : <HardwareContainer />}</>;
};

export default Equipamiento;
