import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";

export const DefaultLayout = () => {
    return (
      <div className="default-layout">
        <div className="header">
          <Header />
        </div>
        <div className="main">Main Page Content</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
};
