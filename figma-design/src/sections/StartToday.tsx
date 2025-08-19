// ======== join thousands of Professionals Using Lead Crm secton  ============

import Image from "../components/Image";
import Button from "../components/Button";

const StartToday = () => {
  return (
    <>
      <section className="section start-today">
        <div className="conatiner-fluid px-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 ">
              <h4 className="fw-600 secondary-font  main-title secondary-color-1 text-capitalize">
                Join Thousands of Professionals Using LeadCRM
              </h4>
            </div>
            <div className="col-12 mt-4">
              <Image
                src="/assets/img/start-today.png"
                title="Our Supported LeadCRM"
                alt="Our Supported LeadCRM"
                style={{ width: "100%" }}
              />
            </div>
            {/* btn  */}
            <div className="col-xl-3 text-center col-lg-3 col-md-4 col-sm-6 col-9 mt-lg-5 mt-4">
              <Button
                title="Get Started Today"
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

export default StartToday;
