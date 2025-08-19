// ======== banner section   ============

import Icon from "../components/Icon";
import Button from "../components/Button";

const Banner = () => {
  return (
    <div className="container-fluid px-sm-0 banner bg-img py-sm-5 py-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-xxl-7 col-xl-9 col-lg-10 col-md-11 col-12">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8 col-sm-9 col-12">
              <div className="card rocket-card fs-6 border-primary d-flex justify-content-center align-items-center gap-2 flex-row flex-wrap text-center card-body py-2 px-2 rounded-pill">
                <Icon title="rocket" width="20px" height="20px" />
                <span className="fs-14 fw-400 text-color-1">
                  Thousands of Professional using LeadCRM
                </span>
              </div>
            </div>
            <div className="col-12 mt-2">
              <h1 className="text-center title  fw-600 text-black">
                LinkedIn CRM Integration <br></br> Capture, Sync and Enrich in{" "}
                <span className="primary-color-1 fw-600 title position-relative">
                  Both Ways{" "}
                  <Icon title="pattern" classname="position-absolute pattern" />
                </span>
              </h1>
              <p className="text-center mt-4  mb-0 subtitle fw-500">
                Automatically sync LinkedIn prospects to your CRM and overlay
                existing CRM contacts on LinkedIn profiles. Complete
                bi-directional integration with HubSpot, Salesforce, and
                Pipedrive.
              </p>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-7 col-11 mt-3">
              <div className="card bg-linear border-0 d-flex justify-content-between align-items-center gap-4 flex-row flex-wrap text-center card-body py-3 px-4 rounded-4">
                <span className="fs-18 fw-600">Works with</span>
                <div className="d-flex gap-2 flex-wrap align-items-center">
                  <Icon title="company-1" width="35px" height="35px" />
                  <Icon title="company-2" width="35px" height="35px" />
                  <Icon
                    title="Salesforce-Integration"
                    width="35px"
                    height="35px"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4  align-items-center">
              <div className="col-xxl-3 col-md-4 col-sm-5 col-10">
                <div className="d-flex justify-content-md-between gap-4 align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <Icon
                      title="chrome-1"
                      width="35px"
                      height="35px"
                      classname="bg-white  p-2 rounded-2 d-flex justify-content-center align-items-center"
                    />
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex gap-1 align-items-center gap-1">
                        {[...Array(3)].map((_, index) => (
                          <Icon
                            key={index}
                            title="star"
                            width="18px"
                            classname="gold-color"
                            height="18px"
                          />
                        ))}
                      </div>
                      <span>5/5</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Icon
                      title="playstore"
                      width="35px"
                      height="35px"
                      classname="bg-white  p-2 rounded-2 d-flex justify-content-center align-items-center"
                    />
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex gap-1 align-items-center gap-1">
                        {[...Array(3)].map((_, index) => (
                          <Icon
                            key={index}
                            title="star"
                            width="18px"
                            classname="gold-color"
                            height="18px"
                          />
                        ))}
                      </div>
                      <span>5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto mt-4">
              <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center">
                <div className="py-2 rounded-2 justify-content-center px-3 bg-light-black text-white d-flex gap-4 align-items-center available-chrome">
                  <div className="">
                    <span className="fs-12 fw-300">Available in</span>
                    <p className="m-0 fs-14">Chrome Web Store</p>
                  </div>
                  <Icon
                    title="chrome-1"
                    width="30px"
                    height="30px"
                    classname="p-1 rounded-circle bg-white d-flex justify-content-center align-items-center"
                  />
                </div>
                <Button
                  title="Get a Free Trial Now!"
                  type="button"
                  classname="px-3 text-center justify-content-center  secondary-btn py-3 fs-16 fw-600 rounded-lg bg-tertiary-1 border text-black gap-2 d-flex align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
