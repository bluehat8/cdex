'use client'

import type { NextPage } from "next";
import styles from "../styles/footer-frame.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterFrame: NextPage = () => {
  return (
    <section className={styles.footerFrame}>
      <div className={styles.assetsFrame}>
        <div className={styles.assetsFrameInner}>
          <div className={styles.whatAreRealWorldAssetsRwParent}>
            <h1 className={styles.whatAreRealWorldContainer}>
              <span>{`What are tokenized commodities `}</span>
              <span className={styles.rwas}>(CDEX)</span>
              <span>?</span>
            </h1>
            <div className={styles.frameWrapper}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className={styles.ai4Icon}
                  loading="lazy"
                  alt=""
                  src="/6763ai-4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.rWAAwarenessFrame}>
          <div className={styles.realWorldAssetsRwasAreFParent}>
            <div className={styles.realWorldAssetsRwasContainer}>
              <span>
                <p className={styles.realWorldAssetsRwas}>
                  Real-world assets (RWAs) are fungible or non-fungible tokens
                  that represent traditional financial assets on the blockchain.
                  RWAs can represent tangible assets such as real estate or
                  intangible assets such as government bonds and carbon credits.
                </p>
                <p className={styles.p}>‍</p>
                <p className={styles.realWorldAssetTokenization}>
                  Real-world asset tokenization is the process of bringing these
                  assets on-chain as security tokens to take advantage of
                  blockchain technology. Any asset of value can be tokenized and
                  utilized on-chain in transactions.
                </p>
                <p className={styles.p1}>‍</p>
                <p
                  className={styles.securityTokensCan}
                >{`Security tokens can be issued to represent real-world assets that exist and are managed off-chain by custodians, or security tokens can be issued to serve as real-world assets themselves. `}</p>
              </span>
            </div>
            <div className={styles.exampleAssetFrame}>
              <div className={styles.forExampleAContainer}>
                <p className={styles.forExampleA}>
                  For example, a bond can be issued directly on-chain as a
                  token, or it can be issued and held off-chain.
                </p>
              </div>
              <div className={styles.readMoreGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.readMore}>Read more</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactUsGroup}>
            <img
              className={styles.undrawCityGirlCcpd1Icon}
              loading="lazy"
              alt=""
              src="/undraw-city-girl-ccpd-1.svg"
            />
          </div>
        </div> */}
<div className={`container ${styles.container}`}>
  <div className="row">
    <div className="col-lg-6 mb-4">
      <div className="card h-100 border-0">
        <div className="card-body">
          <p className={`card-text ${styles.fontsize}`}>
            Commodity tokenization is the process of creating digital tokens on a blockchain that represent physical commodities such as gold, oil, or agricultural products. These tokens can be traded, stored, and transferred just like cryptocurrencies but are backed by real-world assets. The primary aim is to bring the benefits of blockchain technology, such as transparency, security, and ease of transfer, to the commodity markets.
          </p>

          <p className="card-text text-left">
            One of the key advantages of commodity tokenization is increased liquidity. Traditional commodity markets often suffer from illiquidity due to the physical nature of the assets and the complexities involved in their storage and transportation. Tokenization allows these assets to be traded more freely and efficiently on digital platforms, making it easier for investors to buy and sell them without the usual logistical challenges.
          </p>

          <p className="card-text">
            Another significant benefit is the democratization of access to commodity investments. By breaking down physical commodities into smaller, divisible tokens, even small investors can participate in markets that were previously out of reach due to high entry barriers. This can lead to a more inclusive financial system where a broader range of individuals can invest in and benefit from commodities.
          </p>

          <p className="card-text">
            Lastly, commodity tokenization enhances transparency and traceability. Blockchain technology provides a decentralized and immutable ledger that records every transaction, ensuring that the provenance of the commodity is easily traceable. This can help reduce fraud, increase trust among market participants, and ensure that the commodities are sourced and traded in a responsible manner.
          </p>
        </div>
        <div className="text-center w-100">
          <button className={`btn btn-primary ${styles.customWidth85}`}>Read more</button>
        </div>
      </div>
    </div>

    <div className="col-lg-6 mb-4 mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <img
            className="undrawCityGirlCcpd1Icon img-fluid"
            loading="lazy"
            alt=""
            src="/undraw_container_ship_re_alm4.svg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default FooterFrame;
