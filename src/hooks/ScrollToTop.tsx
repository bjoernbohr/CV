import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if(pathname.includes('casestudies')) {
      window.scrollTo(0,-1);
    }

  }, [pathname]);

  return null;
}