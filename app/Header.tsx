"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useRef, useState } from "react";

// const ActiveLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
//   const pathname = usePathname();
//   className = `${props.className}}`
//     pathname == "/" ? "current-menu-item current_page_item" : ""
//   }`
//   return <Link {...props}>{children}</Link>;
// };

const Header = () => {
  const siteMenuHeaderRef = useRef(null);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleBurgerMenuClick = (e: any) => {
    e.preventDefault();
    setShowBurgerMenu(!showBurgerMenu);
  };

  const pathname = usePathname();

  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-header-main">
        <div className="site-branding">
          <h1 className="site-title">
            <Link href="/" rel="home">
              Histoires Daux
            </Link>
          </h1>
        </div>
        <div className="burger-icon" onClick={handleBurgerMenuClick}>
          <span className="barre-burger"></span>
          <span className="barre-burger"></span>
          <span className="barre-burger"></span>
        </div>
        <div
          id="site-header-menu"
          ref={siteMenuHeaderRef}
          className={`site-header-menu${showBurgerMenu ? " unwrapped" : ""}`}
        >
          <nav
            id="site-navigation"
            className="main-navigation"
            role="navigation"
            aria-label="Menu principal"
          >
            <div className="menu-navigation-container">
              <ul id="menu-navigation" className="primary-menu">
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-home\
                    ${
                      pathname == "/"
                        ? " current-menu-item current_page_item"
                        : ""
                    }`}
                >
                  <Link href="/">Accueil</Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page\
                    ${
                      pathname == "/a-propos"
                        ? " current-menu-item current_page_item"
                        : ""
                    }`}
                >
                  <Link href="/a-propos">À propos</Link>
                </li>
                <li
                  className={`menu-item menu-item-type-post_type menu-item-object-page\
                    ${
                      pathname == "/contact"
                        ? " current-menu-item current_page_item"
                        : ""
                    }`}
                >
                  <Link href="/contact/">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <hr className="clear" />
        </div>
      </div>
    </header>
  );
};

export default Header;
