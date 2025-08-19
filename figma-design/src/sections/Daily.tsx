// ======== every linkedin prospector faces these daily challenges secton  ============

import Image from "../components/Image";
import Icon from "../components/Icon";
import Button from "../components/Button";

const Daily = () => {
  // dummy data
  const DailyData = [
    {
      id: "1",
      title: "Without LeadCRM",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/08084651/Without-LeadCRM-768x299.webp",
      icon: "",
      list: [
        {
          title: "Manual Data Entry",
          subtitle: "3+ Hours wasted daily",
          icon: "close",
          text: "Copying LinkedIn contacts to CRM manually plus losing conversation history",
        },
        {
          title: "Incomplete Data",
          subtitle: "60% Data Incomplete",
          icon: "close",
          text: "LinkedIn profiles missing Email and Phones from 700M+ Database",
        },
        {
          title: "No CRM Visibility",
          subtitle: "Zero context available",
          icon: "close",
          text: "Can’t see existing CRM contacts when browsing LinkedIn profiles",
        },
        {
          title: "Limited Productivity",
          subtitle: "No smart assistance",
          icon: "close",
          text: "Writing messages manually plus no AI assistant for reply, Invite or comments.",
        },
      ],
    },
    {
      id: "2",
      title: "With LeadCRM",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/08100321/With-LeadCRM-768x299.webp",
      icon: "With-LeadCRM",
      subtitle: "4+ Hours/day Saved",
      list: [
        {
          title: "Complete Bi-Directional Sync",
          subtitle: "",
          icon: "Bi-directional-sync",
          text: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
        },
        {
          title: "700M+ Contacts + Enrichment",
          subtitle: "",
          icon: "contact",
          text: "Get verified emails and phone numbers from a vast global database.",
        },
        {
          title: "CRM Overlay on LinkedIn",
          subtitle: "",
          icon: "Overlay-LinkedIn",
          text: "CSee full CRM insights directly on LinkedIn profiles without switching tabs.",
        },
        {
          title: "AI Response + Templates + Bulk Exports",
          subtitle: "",
          icon: "AIProductivity",
          text: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
        },
      ],
    },
  ];
  return (
    <>
      <section className="section daily position-relative">
        <div className="container-fluid px-md-4 px-3">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="fw-600 main-title secondary-font text-center  secondary-color-1 text-capitalize">
                Every LinkedIn Prospector faces these daily challenges
              </h4>
            </div>

            <div className="col-12  mt-4">
              <div className="row position-relative align-items-center">
                {/* dynamic cards */}
                {DailyData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-6 col-md-12 mb-lg-0 mb-4 px-lg-5 "
                    >
                      <div
                        className={`card card-body ${
                          item.id === "1"
                            ? "bg-red-color-1-light red-card "
                            : "bg-white shadow green-card"
                        } border-0 p-md-4 p-3 rounded-4`}
                      >
                        <Image
                          src={item.img}
                          title={item.title}
                          alt={item.title}
                          className="img-width"
                        />
                        <div className="d-flex gap-sm-3 gap-0  align-items-center flex-wrap flex-sm-nowrap">
                          <h4
                            className={`fw-600 ${
                              item.id === "1" ? "red-color-1" : "green-color"
                            }  my-3 fs-24  text-capitalize`}
                          >
                            {item.title}
                          </h4>
                          <Icon title={item.icon} width="25px" height="25px" />
                          <span className="green-color py-1 px-2 fs-12 fw-500 rounded-pill bg-light-green">
                            {item.subtitle}
                          </span>
                        </div>
                        <ul className="mt-2 p-0 ">
                          {item.list.map((listitem, index) => {
                            return (
                              <li
                                className="d-flex flex-sm-nowrap flex-wrap gap-3 align-items-center mb-3"
                                key={index}
                              >
                                <Icon
                                  title={listitem.icon}
                                  width={`${item.id === "1" ? "40px" : "50px"}`}
                                  height={`${
                                    item.id === "1" ? "40px" : "50px"
                                  }`}
                                />
                                <div>
                                  <p className="fw-600 fs-18 mb-2 m-0 d-flex gap-2 flex-wrap align-items-center">
                                    {listitem.title}
                                    {listitem.subtitle && (
                                      <span className="text-red py-1 text-truncate px-2 fs-12 fw-500 rounded-pill bg-light-red red-color">
                                        {listitem.subtitle}
                                      </span>
                                    )}
                                  </p>
                                  <span className="fw-300 light-black-1 fs-16 d-block">
                                    {listitem.text}
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
                <div className="vs-divider d-sm-block d-none text-center"></div>
                <span className="vs-text d-sm-block d-none secondary-color-1 text-uppercase fw-medium fs-22">
                  VS
                </span>
              </div>
              {/* btn  */}
              <div className="row position-relative justify-content-center align-items-center">
                <div className="col-xl-3 text-center col-lg-3 col-md-4 col-sm-6 col-10 mt-md-5 mt-3">
                  <Button
                    title="Start Using LeadCRM Now"
                    type="button"
                    classname="px-3 secondary-btn text-center d-block w-100 py-3 fs-16 fw-bold flex-row-reverse  bg-tertiary-1 border text-black gap-2 d-flex justify-content-center align-items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pattern  */}
        <Image
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/08121951/Save-40-hours-every-Month-3-768x433.webp"
          alt="pattern"
          title="pattern"
          className="position-absolute pattern"
        />
      </section>
    </>
  );
};

export default Daily;
