import React, { useEffect, useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { CopyRight, logoimg, logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBodyScroll = (shouldHide) => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("ovhidden", shouldHide);
  };

  const handleToggle = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      toggleBodyScroll(next);
      return next;
    });
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
      toggleBodyScroll(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);
    return () => {
      handleRouteChange();
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="navbarlogo">
            <Link className="navbar-brand nav_ac" href="/">
              {logotext},{" "}
              <Image
                className="logoimgs"
                src={logoimg}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button
              className="menu__button  nav_ac"
              onClick={handleToggle}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${menuOpen ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} href="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      href="/portfolio"
                      className="my-3"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} href="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      href="/contact"
                      className="my-3"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a
                aria-label="facebook"
                href={socialprofils.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                aria-label="github"
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                aria-label="twitter"
                href={socialprofils.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <p className="copyright m-0">
              copyright: {CopyRight.year} {logotext}
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
