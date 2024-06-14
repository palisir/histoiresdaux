const Sidebar = () => {
  return (
    <aside id="secondary" className="sidebar widget-area" role="complementary">
      <section
        id="custom_post_widget-3"
        className="widget widget_custom_post_widget"
      >
        <div className="social-links">
          <ul className="social-list">
            <li id="facebook" className="social-icon">
              <a href="https://www.facebook.com/Histoires-Daux-1004847796266965/"></a>
            </li>
            <li id="twitter" className="social-icon">
              <a href="#"></a>
            </li>
            <li id="google" className="social-icon">
              <a href="#"></a>
            </li>
            <li id="rss" className="social-icon">
              <a href="http://www.histoiredaux.fr/feed/"></a>
            </li>
          </ul>
          <hr className="clear" />
        </div>
      </section>

      <section
        id="custom_post_widget-4"
        className="widget widget_custom_post_widget"
      >
        <h2 className="widget-title">L&rsquo;auteur :</h2>
        <div className="encart-auteur">
          <img
            className="img-auteur alignnone size-full wp-image-104"
            src="https://www.histoiresdaux.fr/wp-content/uploads/2016/06/auteur.jpg"
            alt="auteur"
            width="240"
            height="250"
          />
          <div className="auteur-resume">
            <div className="auteur-resume-content">
              Christine Daux partage sa vie entre l&rsquo;Alsace et les Vosges
              d&rsquo;où est originaire sa branche maternelle. Psychologue
              clinicienne de formation elle exerce comme psychologue du travail
              à Strasbourg où elle vit depuis plus de 30 ans.{" "}
            </div>
            <p>
              <a className="auteur-readmore" href="/a-propos/">
                En savoir plus →
              </a>
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
