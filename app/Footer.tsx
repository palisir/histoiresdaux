const Footer = () => {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <nav
        className="main-navigation"
        role="navigation"
        aria-label="Menu principal de pied"
      >
        <div className="menu-navigation-footer-container">
          <ul id="menu-navigation-footer" className="pouet-menu">
            <li
              id="menu-item-38"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"
            >
              <a href="/">Accueil</a>
            </li>
            <li
              id="menu-item-36"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36"
            >
              <a href="/a-propos/">À propos</a>
            </li>
            <li
              id="menu-item-37"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37"
            >
              <a href="/contact/">Contact</a>
            </li>
            <li
              id="menu-item-41"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41"
            >
              <a href="/mentions-legales/">Mentions Légales</a>
            </li>
          </ul>
        </div>
        <div className="site-info"></div>
      </nav>
    </footer>
  );
};

export default Footer;
