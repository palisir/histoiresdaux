import Image from "next/image";
import auteure from "./images/auteure.jpg";

const AuthorWidget = () => {
  return (
    <section
      id="custom_post_widget-4"
      className="widget widget_custom_post_widget"
    >
      <h2 className="widget-title">L&rsquo;auteur :</h2>
      <div className="encart-auteure">
        <Image
          src={auteure}
          alt="auteure"
          width={240}
          height={250}
          className="img-auteure alignnone size-full wp-image-104"
        />
        <div className="auteure-resume">
          <div className="auteure-resume-content">
            Christine Daux partage sa vie entre l&rsquo;Alsace et les Vosges
            d&rsquo;où est originaire sa branche maternelle. Psychologue
            clinicienne de formation elle exerce comme psychologue du travail à
            Strasbourg où elle vit depuis plus de 30 ans.{" "}
          </div>
          <p>
            <a className="auteure-readmore" href="/a-propos/">
              En savoir plus →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorWidget;
