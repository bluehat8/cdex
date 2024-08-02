
'use client'

import type { NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';

const RisksMitigationFrame: NextPage = () => {
  return (
    <div className="container" style={{ minHeight: "90vmin" }}>
      <div className="row" style={{ marginTop: "30vmin" }}>
        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/Logo-CDEX.svg" alt="Logo" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 order-md-1 d-flex align-items-center">
          <div className="w-100">
            <h2 className="fw-light text-md-start text-center">
              CDEX is a cutting-edge trading platform where commodities are tokenized and traded on a blockchain network. It embodies a shift from traditional, centralized marketplaces to a transparent, secure, and efficient digital ecosystem.
            </h2>
            <p className="fw-bold text-md-start text-center">
              Digitalized commodities assets, with every stage of their lifecycle - from cultivation to consumption - encoded into secure, traceable, and easily exchangeable tokens.
            </p>
            <div className="d-flex justify-content-md-start justify-content-center">
              <button className="btn btn-primary mt-3" style={{ width: "367px", background: "#0f172a", border: "none" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="row order-md-3" style={{ marginTop: "12vmin" }}>
          <div className="col-12 text-center">
            <img src="/bimouse.svg" alt="Bimouse" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RisksMitigationFrame;