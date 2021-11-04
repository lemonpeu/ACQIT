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
