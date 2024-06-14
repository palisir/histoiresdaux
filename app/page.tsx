import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./css/style.css";

const Page = () => {
  return (
    <div id="page" className="site">
      <div className="site-inner">
        <Header />
        <div id="content" className="site-content">
          <Content />
          <Sidebar />

          <hr className="clear" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
