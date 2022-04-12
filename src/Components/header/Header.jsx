import React from "react";
import style from "./Header.module.css";
import LogoSection from "./logoSection/Logo";
import Navigation from "./Navigation/Navigation";
import HeaderContent from "./headerContent/HeaderContent";

const Header = () => {
  return (
    <header className={style.Header}>
      <LogoSection />
      <Navigation />
      <HeaderContent />
    </header>
  );
};

export default Header;
