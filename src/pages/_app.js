import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Headermain from "../header";
import { Socialicons } from "../components/socialicons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../header/style.css";
import "../components/themetoggle/style.css";
import "../components/socialicons/style.css";
import "../sections/home/style.css";
import "../sections/about/style.css";
import "../sections/portfolio/style.css";
import "../sections/contact/style.css";

const AnimatedCursor = dynamic(() => import("../hooks/AnimatedCursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Headermain />
      <Component {...pageProps} />
      <Socialicons />
    </>
  );
}

export default MyApp;
