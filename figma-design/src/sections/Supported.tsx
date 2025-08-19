// ======== our supported lead Crm secton  ============

import Image from "../components/Image";
import Button from "../components/Button";
import Icon from "../components/Icon";

const Supported = () => {
  return (
    <>
      <section className="section supported position-relative">
        <div className="conatiner-fluid px-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 text-center">
              <h4 className="fw-600 secondary-font text-center main-title secondary-color-1 text-capitalize">
                Our Supported LeadCRM
              </h4>
              <p className="fw-400 text-center secondary-font fs-16 light-black-1 mb-0 mt-3">
                LeadCRM provides Native Integrations with popular CRM tools to
                make the most out of your LinkedIn prospecting.{" "}
                <br className="d-md-block d-none"></br> We don’t want you to
                miss any revenue opportunity on the internet!
              </p>
            </div>
            <div className="col-12 mt-4">
              <Image
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
                title="Our Supported LeadCRM"
                alt="Our Supported LeadCRM"
                className="img-width"
              />
            </div>
            {/* btn  */}
            <div className="col-xl-3 text-center col-lg-4 col-md-5 col-sm-6 col-10 mt-5">
              <Button
                title="Lets Integrate your CRM Now!"
                type="button"
                classname="px-3 secondary-btn text-center d-block w-100 py-3 fs-16 fw-bold flex-row-reverse  bg-tertiary-1 border text-black gap-2 d-flex justify-content-center align-items-center"
              />
            </div>
          </div>
        </div>
        {/* icons  */}
        <Icon
          title="support-1"
          classname="position-absolute d-md-block d-none support-1"
        />
        <Icon
          title="support-2"
          classname="position-absolute d-md-block d-none support-2"
        />
        {/* icons  */}
      </section>
    </>
  );
};

export default Supported;
