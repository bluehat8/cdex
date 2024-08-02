import type { NextPage } from "next";
import Header from "./components/header";
import RisksMitigationFrame from "./components/banner";
import FooterFrame from "./components/footer-frame";
import BuildSystematizeRectangles from "./components/build-systematize-rectangles";
import SocialMediaLinks from "./components/social-media-links";
import styles from "./page.module.css";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const RWAdrops: NextPage = () => {
  return (
    <>
    <Header />

    <div className={styles.rwadrops}>

      <section className={styles.headerFrame}>
        <div className={styles.logoFrame}>
          <div className={styles.logoFrameChild} />
          <RisksMitigationFrame />
        </div>
      </section>
      <FooterFrame />


<section className={styles.riskMitigationRectangle}>
<div className="row">
  <div className="col-12 col-md-6">
    <div className={styles.mitigateRisksToSecurityAndWrapper}>
    <h1 className={styles.mitigateRisksToContainer}>
            <span>
              <span className={styles.m}>m</span>
            </span>
            <span className={styles.itigateRisksToSecurityAnd}>
              <span>{`itigate risks to security and compliance with `}</span>
              <span className={styles.rwadrops1}>CDEX</span>
              <span>, the blockchain purpose-built for real-world assets</span>
            </span>
          </h1>
    </div>
  </div>
  <div className="col-12 col-md-6">
    <img 
    className={`${styles.whyChooseUsFrame} w-100`}
    src="/rectangle-63@2x.png"
    />
  </div>
</div>

</section>
      <section className={styles.footerFrame}>
        <div className={styles.realworldAssetsInfoParent}>
          <div className={styles.realworldAssetsInfo}>
            <h2 className={styles.whyChooseUs}>Why choose us
            <div className={styles.line}></div>
            </h2>
          </div>
          <div className={styles.contenedor1}>
            <div className={styles.box}>
              <span></span>
              <div className={styles.content}>
                <h2>WE: </h2>
                <p>Crafted a vertical solution for commodities trading. -From seed to delivered product</p> 
              </div>
            </div>
            <div className={styles.box}>
              <span></span>
              <div className={styles.content}>
                <h2>YOU: </h2>
                <p>Get all the benefits. -Invest into supply chains and win big with products</p>
              </div>
            </div>
          </div>
          {/* <div className={styles.contactForm}>
            <BuildSystematizeRectangles
              wE="WE:"
              buildRWABasedFinancialEng="Build RWA based financial engines and systematize them for growth"
            />
            <BuildSystematizeRectangles
              wE="YOU:"
              buildRWABasedFinancialEng="Hold  RWA-NFTs, get recurring income, and help bring in the metaverse of finance"
            />
          </div> */}
        </div>
      </section>
      <SocialMediaLinks />
    </div>

    <Footer/>

    </>
  );
};

export default RWAdrops;
