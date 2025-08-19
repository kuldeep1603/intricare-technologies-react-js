// ======== How it works section ===============

import Image from "../components/Image";
import Button from "../components/Button";

const Works = () => {
  // dummy data arrya of object
  const worksData = [
    {
      title: "1",
      subtitle: "Install the Extension",
      text: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      img: "/assets/img/works/step-1.png",
    },
    {
      title: "2",
      subtitle: "Browse LinkedIn",
      text: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      img: "/assets/img/works/step-2.png",
    },
    {
      title: "3",
      subtitle: "Get Enriched Data",
      text: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      img: "/assets/img/works/step-3.png",
    },
    {
      title: "4",
      subtitle: "Sync to CRM Instantly",
      text: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      img: "/assets/img/works/step-4.png",
    },
  ];
  // dummy data arrya of object

  return (
    <>
      <section className="section works">
        <div className="conatiner-fluid px-3">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-600 main-title secondary-font  secondary-color-1 text-capitalize">
                How it works
              </h4>
              <p className="fw-400 secondary-font fs-16 light-black-1 mb-0 mt-2">
                From setup to success in{" "}
                <span className="fw-600 light-black-1">4 simple steps</span>
              </p>
            </div>
          </div>
          <div className="row mt-4 justify-content-center align-items-center">
            {/* dynamic cards for how it work  */}
            {worksData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-lg-0 mb-3"
                >
                  <div className="card border-0 h-100 rounded-4  text-center">
                    <div className="card-body">
                      <b className="primary-color-1 tertiary-font title">
                        {data.title}
                      </b>
                      <p className="fw-700 fs-22 m-0 secondary-color-1">
                        {data.subtitle}
                      </p>
                      <span className="text-center mt-2 d-block fs-14 fw-300 light-black">
                        {data.text}
                      </span>
                    </div>
                    <Image
                      title="step-1"
                      src={data.img}
                      alt="step-1"
                      className="p-2 img-width"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {/* btn  */}
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-3 text-center col-lg-3 col-md-4 col-sm-6 col-10 mt-5">
              <Button
                title="Try LeadCRM Now"
                type="button"
                icon
                iconTitle="arrow-right"
                iconstyle=""
                classname="px-3 secondary-btn text-center d-block w-100 py-3 fs-16 fw-bold flex-row-reverse  bg-tertiary-1 border text-black gap-2 d-flex justify-content-center align-items-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
