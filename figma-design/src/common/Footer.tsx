import Image from "../components/Image";
import Icon from "../components/Icon";

const Footer = () => {
  return (
    <footer className="secondary-font section">
      <div className="container-fluid px-4">
        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
          <div className="col mb-xl-0 mb-4">
            <Image
              src="/assets/img/LeadCRM-logo.webp"
              title="logo"
              alt="logo"
              className="logo"
            />
            <p className="secondary-font mt-2 fw-500 m-0 fs-14">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <ul className="m-0 p-0 mt-4 d-flex gap-2 align-items-center ">
              <li>
                <a href="#">
                  <Icon
                    title="facebook"
                    width="40px"
                    height="40px"
                    classname="p-2 rounded-circle bg-primary-1 text-white"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    title="x"
                    width="40px"
                    height="40px"
                    classname="p-2 rounded-circle bg-primary-1 text-white"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    title="insta"
                    width="40px"
                    height="40px"
                    classname="p-2 rounded-circle bg-primary-1 text-white"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    title="linkedin"
                    width="40px"
                    height="40px"
                    classname="p-2 rounded-circle bg-primary-1 text-white"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-xl-0 mb-4">
            <b className="mb-3 d-block fs-18 secondary-font secondary-color-1">
              Integrations
            </b>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  HubSpot
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Salesforce
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Pipedrive
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Close.io
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Insightly
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-xl-0 mb-4">
            <b className="mb-3 d-block fs-18 secondary-font secondary-color-1">
              Alternative
            </b>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Surfe VS LeadCRM
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Linkmatch Alternative
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-xl-0 mb-4">
            <b className="mb-3 d-block fs-18 secondary-font secondary-color-1">
              Legal
            </b>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-xl-0 mb-4">
            <b className="mb-3 d-block fs-18 secondary-font secondary-color-1">
              Contact Us
            </b>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  support@leadcrm.io
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  +1 231-538-7466
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black fs-14 fw-400">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-lg-5 mt-3 justify-content-center align-items-center">
          <div className="col-lg-11 col-12 text-center">
            <span className="secondary-font d-block fs-14 light-black  ">
              Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
              LinkedIn(tm) logos and trademarks displayed on this tool are
              property of LinkedIn. LeadCRM is distributed AS IS. Your use of
              LeadCRM is at your own risk.
            </span>
            <span className="secondary-font d-block mt-3 fs-14 light-black ">
              Copyright © 2025 LeadCRM. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
