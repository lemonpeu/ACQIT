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
  };
  return <>{isLoading ? <LoadingLogo /> : <Home />}</>;
}
