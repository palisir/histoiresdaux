import Link from "next/link";

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
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-38">
              <Link href="/">Accueil</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36">
              <Link href="/a-propos/">À propos</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37">
              <Link href="/contact/">Contact</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
              <Link href="/mentions-legales/">Mentions Légales</Link>
            </li>
          </ul>
        </div>
        <div className="site-info"></div>
      </nav>
    </footer>
  );
};

export default Footer;
