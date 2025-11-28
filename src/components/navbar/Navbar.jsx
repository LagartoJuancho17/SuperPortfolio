import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./Navbar.css";

import ArticleImg1 from "../../assets/nav/article-1.png";
import ArticleImg2 from "../../assets/nav/article-2.png";
import ArticleImg3 from "../../assets/nav/article-3.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef();
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const navLinks = [
    {
      label: t.navbar.home,
      url: "/",
    },
    {
      label: t.navbar.projects,
      url: "/projects",
    },
    {
      label: t.navbar.archive,
      url: "/archive",
    },
    {
      label: t.navbar.information,
      url: "/information",
    },
  ];

  const articleItems = [
    {
      url: "",
      title: "Queso Studio",
      subTitle: "Agency — Crafting for a minimal experience",
      img: ArticleImg1,
    },
    {
      url: "",
      title: "Marcos",
      subTitle: "Design for a better future and past",
      img: ArticleImg2,
    },
    {
      url: "",
      title: "Hola",
      subTitle: "Showcase — Prove for a better website",
      img: ArticleImg3,
    },
  ];

  const handleArticleClick = () => {
    setIsActive(true);
  };

  const handleShowLessClick = (event) => {
    event.stopPropagation();
    setIsActive(false);
  };

  return (
    <div className="navbar" ref={container}>
      <div className="menu-overlay">
        <div className="menu-bar">
          <div className="menu-logo">
            <Link to="/">Tobias Arraiza</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {navLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link to={link.url} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
            <div className="menu-link-item">
              <div className="menu-link-item-holder" style={{ display: "flex", gap: "20px" }}>
                <span onClick={() => { toggleLanguage("es"); toggleMenu(); }} style={{ opacity: language === "es" ? 1 : 0.5, cursor: "pointer" }}>Español</span>
                <span onClick={() => { toggleLanguage("en"); toggleMenu(); }} style={{ opacity: language === "en" ? 1 : 0.5, cursor: "pointer" }}>English</span>
              </div>
            </div>
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>tobiasarraiza17@gmail.com</p>
              <p>2342 232 343</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>

      <div className="nav-logo">
        <Link to="/">Tobias Arraiza</Link>
      </div>

      <div className="menu-open" onClick={toggleMenu}>
        <p>Menu</p>
      </div>

      <div className="nav-links">
        {navLinks.map((link, index) => (
          <div className="nav-link" key={index}>
            <Link to={link.url}>{link.label}</Link>
          </div>
        ))}
        <div className="nav-link lenguage" onClick={() => toggleLanguage("es")} style={{ cursor: "pointer", opacity: language === "es" ? 1 : 0.5 }}>
          <span>Español</span>
        </div>
        <div className="nav-link lenguage" onClick={() => toggleLanguage("en")} style={{ cursor: "pointer", opacity: language === "en" ? 1 : 0.5 }}>
          <span>English</span>
        </div>
      </div>

      <div
        className={`nav-external-links ${isActive ? "active" : ""}`}
        onClick={handleArticleClick}
      >
        <div className="news-header">
          <p>{t.navbar.news}</p>
        </div>
        {articleItems.map((item, index) => (
          <div
            className="article-item"
            id={`article-item-${index + 1}`}
            key={index}
          >
            <Link to={item.url}>
              <div className="article-item-img">
                <img src={item.img} alt={`Article Img ${index + 1}`} />
              </div>
              <div className="article-item-content">
                <p id="article-item-name">{item.title}</p>
                <p id="article-item-copy">{item.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}

        <div className="toggle-articles" onClick={handleShowLessClick}>
          <button className="btn">{t.navbar.showLess}</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
