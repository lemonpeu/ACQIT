import React, { useState, useEffect } from "react";
import ITConsultingContainer from "@/components/containers/PagesContainer/ITConsulting/ITConsulting";
import LoadingLogo from "@/components/common/loadingLogo/LoadingLogo";

const Consultoria = () => {
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
  return <>{isLoading ? <LoadingLogo /> : <ITConsultingContainer />}</>;
};

export default Consultoria;
