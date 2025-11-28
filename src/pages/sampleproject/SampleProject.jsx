import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useLanguage } from "../../context/LanguageContext";

import "./SampleProject.css";

import Transition from "../../components/transition/Transition";

import ProjectHeroImg from "../../assets/sample-projects/sample-project-hero-2.png";
import ProjectHeroImg2 from "../../assets/sample-projects/sample-project-hero-3.png";
import ProjectHeroImg3 from "../../assets/sample-projects/sample-project-hero.png";
import ProjectImg1 from "../../assets/sample-projects/sample-project-1.png";
import ProjectImg2 from "../../assets/sample-projects/sample-project-2.png";
import ProjectImg3 from "../../assets/sample-projects/sample-project-3.png";
import ProjectImg4 from "../../assets/sample-projects/sample-project-4.png";

const SampleProject = () => {
  const { t } = useLanguage();

  return (
    <ReactLenis root>
      <div className="project">
        <div className="conainer">
          <div className="project-hero-img">
            <img src={ProjectHeroImg} alt="Project Hero Img" />
          </div>

          <div className="project-info">
            <div className="col">
              <div className="project-client">
                <p>{t.sampleProject.client} &#x2192; Uttil</p>
              </div>
              <div className="project-studio">
                <p>{t.sampleProject.studio} &#x2192; Creative Works</p>
              </div>
            </div>
            <div className="col">
              <div className="project-year">
                <p>{t.sampleProject.year} &#x2192; 2025</p>
              </div>
            </div>
          </div>

          <div className="project-copy">
            <div className="col">
              <h1>
                {t.sampleProject.title}
              </h1>
            </div>

            <div className="col">
              <p>
                {t.sampleProject.description1}
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>{t.sampleProject.subInfo.branding}</span>
                  <span>{t.sampleProject.subInfo.uiux}</span>
                  <span>{t.sampleProject.subInfo.development}</span>
                </div>

                <div className="sub-col">
                  <span>&#x2192; {t.sampleProject.fullInfo}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-hero-img-2">
            <img src={ProjectHeroImg2} alt="" />
          </div>

          <div className="project-copy">
            <div className="col"></div>

            <div className="col">
              <p>
                {t.sampleProject.description2}
              </p>
            </div>
          </div>

          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>

          <div className="project-hero-img-3">
            <img src={ProjectHeroImg3} alt="" />
          </div>

          <div className="next-project-cta">
            <Link to="/">
              <h1>{t.sampleProject.nextProject}</h1>
            </Link>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(SampleProject);
