'use client'

import type { NextPage } from "next";
import Script from 'next/script';
import styles from "../styles/group-component.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const GroupComponent: NextPage = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.poppinsFont}`} style= {{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 330, 255, 0.8)"}}>
        <div className="container">

          <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
            <img
              className={`mr-2 ${styles.logo1Icon}`}
              loading="lazy"
              alt=""
              src="Icono-CDEX.svg"
            />
            <span className={`d-sm-inline`} style={{marginTop: "8px"}}>
              CDEX
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link fw-bold ${styles.walletLink}`} href="#">
                  Wallet
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
  </>
  );
  
};

export default GroupComponent;