"use client";

import { useRef, useState } from "react";

const Header = () => {
  const siteMenuHeaderRef = useRef(null);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleBurgerMenuClick = (e) => {
    e.preventDefault();
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-header-main">
        <div className="site-branding">
          <h1 className="site-title">
            <a href="https://www.histoiresdaux.fr/" rel="home">
              Histoires Daux
            </a>
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
          className="site-header-menu"
          style={{ display: showBurgerMenu ? "block" : "none" }}
          // style={{ display: "none" }}
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
                  id="menu-item-32"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-32"
                >
                  <a href="https://www.histoiresdaux.fr/">Accueil</a>
                </li>
                <li
                  id="menu-item-35"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"
                >
                  <a href="https://www.histoiresdaux.fr/a-propos/">À propos</a>
                </li>
                <li
                  id="menu-item-31"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"
                >
                  <a href="https://www.histoiresdaux.fr/contact/">Contact</a>
                </li>
              </ul>
            </div>{" "}
          </nav>
          <div className="header-widget">
            <form
              role="search"
              method="get"
              className="search-form"
              action="https://www.histoiresdaux.fr/"
            >
              <input
                type="search"
                className="search-field"
                placeholder="Recherche"
                value=""
                name="s"
              />
              <button
                type="submit"
                id="header-search-button"
                className="search-submit"
              ></button>
            </form>
          </div>
          <hr className="clear" />
        </div>
      </div>
    </header>
  );
};

export default Header;
