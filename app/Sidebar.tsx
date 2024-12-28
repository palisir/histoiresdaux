import Link from "next/link";
import AuthorWidget from "./AuthorWidget";

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
              <Link href="https://www.facebook.com/Histoires-Daux-1004847796266965/"></Link>
            </li>
            <li id="rss" className="social-icon">
              <Link href="/feed/"></Link>
            </li>
          </ul>
          <hr className="clear" />
        </div>
      </section>
      <AuthorWidget />
    </aside>
  );
};

export default Sidebar;
