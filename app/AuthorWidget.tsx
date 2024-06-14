import Image from "next/image";
import auteur from "./images/auteur.jpg";

const AuthorWidget = () => {
  return (
    <section
      id="custom_post_widget-4"
      className="widget widget_custom_post_widget"
    >
      <h2 className="widget-title">L&rsquo;auteur :</h2>
      <div className="encart-auteur">
        <Image
          src={auteur}
          alt="auteur"
          width={240}
          height={250}
          className="img-auteur alignnone size-full wp-image-104"
        />
        <div className="auteur-resume">
          <div className="auteur-resume-content">
            Christine Daux partage sa vie entre l&rsquo;Alsace et les Vosges
            d&rsquo;où est originaire sa branche maternelle. Psychologue
            clinicienne de formation elle exerce comme psychologue du travail à
            Strasbourg où elle vit depuis plus de 30 ans.{" "}
          </div>
          <p>
            <a className="auteur-readmore" href="/a-propos/">
              En savoir plus →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorWidget;
