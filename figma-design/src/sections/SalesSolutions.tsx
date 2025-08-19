// ======== complete linkedin sales solutions secton  ============

import React from "react";
import Icon from "../components/Icon";
import Image from "../components/Image";
import Button from "../components/Button";

const SalesSolutions = () => {
  // dummy data
  const TabsData = [
    {
      button: {
        title: "CRM Data Enrichment",
        iconTitle: "CRMDataEnrichment",
        id: "CRMDataEnrichment-tab",
        databstarget: "CRMDataEnrichment",
      },
      tabcontent: {
        title:
          " It’s hard to find the accurate contact data for every prospects by",
        subtitle: "Incomplete Data",
        id: "CRMDataEnrichment",
        card1: {
          title: "Here is how LeadCRM tackles that situation.",
          subtitle: "Try LeadCRM Data Enrichment",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-768x464.png",
        },
        card2: {
          title: "If it does not works for you ! try our",
          subtitle: "Advanced Waterfall Enrichment",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp",
        },
      },
    },
    {
      button: {
        title: "CRM Data Sync",
        iconTitle: "CRMDataSync",
        id: "CRMDataSync-tab",
        databstarget: "CRMDataSync",
      },
      tabcontent: {
        title: "40+ hours lost to copy-paste. Every. Single. Month",
        subtitle: "Lost Lead Context",
        id: "CRMDataSync",
        card1: {
          title: "The Solution? LeadCRM's Instant Data Sync.",
          subtitle: "Try LeadCRM Data Sync",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075917/CRM-Data-Sync.png",
        },
        card2: {
          title: "Unlock instant CRM insights on every profile you visit.",
          subtitle: "Try LeadCRM Data Overlay",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11080104/CRM-Data-Sync-1.png",
        },
      },
    },
    {
      button: {
        title: "Bulk Export & Enrichment",
        iconTitle: "BulkExportEnrichment",
        id: "BulkExportEnrichment-tab",
        databstarget: "BulkExportEnrichment",
      },
      tabcontent: {
        title: "Your Sales Navigator Workflow is Broken.",
        subtitle: "Lost Productivity",
        id: "BulkExportEnrichment",
        card1: {
          title: "Enrich & Export 250 Profiles in Just 60 Seconds.",
          subtitle: "Try LeadCRM Bulk Export",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075922/Bulk-Export-Enrichment.png",
        },
        card2: {
          title: "Export & enrich profiles to the CRM or G-Sheet",
          subtitle: "Try LeadCRM Bulk Export",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075921/Bulk-Export-Enrichment-1.png",
        },
      },
    },
    {
      button: {
        title: "AI Productivity",
        iconTitle: "AIProductivity",
        id: "AIProductivity-tab",
        databstarget: "AIProductivity",
      },
      tabcontent: {
        title:
          "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.",
        subtitle: "No Smart Assistance",
        id: "AIProductivity",
        card1: {
          title: "Get the same high-impact engagement in 80% less time.",
          subtitle: "Try LeadCRM AI Response",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/05/28111308/AI-Comment-image-1-768x603.webp",
        },
        card2: {
          title: "Use Shortcuts to reply faster.",
          subtitle: "Try LeadCRM Templates",
          image:
            "https://img.leadcrm.io/wp-content/uploads/2025/05/29113839/Template-imges-2-768x529.webp",
        },
      },
    },
  ];

  // state for active class
  const [activeTab, setActiveTab] = React.useState<string>(
    TabsData[0].tabcontent.id
  );

  return (
    <section className="section sales-solutions position-relative">
      <div className="container-fluid px-md-4 px-3">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="fw-600 secondary-font text-center main-title secondary-color-1 text-capitalize">
              Complete LinkedIn Sales Solutions
            </h4>
            <p className="fw-400 text-center secondary-font fs-14 light-black-1 mb-0 mt-3">
              Everything you need for professional LinkedIn prospecting
            </p>
          </div>

          <div className="col-12 mt-5 px-md-4">
            {/* nav pills */}
            <ul
              className="nav nav-pills flex-nowrap gap-5 overflow-auto mb-3 border-bottom d-flex justify-content-md-between align-items-center"
              role="tablist"
            >
              {TabsData.map((data, index) => (
                // dynamic tabs buttons
                <li className="nav-item" key={index}>
                  <Button
                    type="button"
                    title={data.button.title}
                    databstoggle="pill"
                    databstarget={`#${data.tabcontent.id}`}
                    id={data.button.id}
                    icon
                    onClick={() => setActiveTab(data.tabcontent.id)}
                    iconTitle={data.button.iconTitle}
                    iconstyle=""
                    classname={`d-flex gap-2 text-truncate align-items-center nav-link pb-2 p-0 rounded-0 bg-transparent ${
                      data.tabcontent.id === activeTab ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </ul>

            {/* tab content */}
            <div className="tab-content mt-4">
              {/* dynamic tabs content  */}
              {TabsData.map((data, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    data.tabcontent.id === activeTab ? "show active" : ""
                  }`}
                  id={data.tabcontent.id}
                >
                  <div className="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-center">
                    <p className="fs-18 light-black-1 fw-400 m-0">
                      {data.tabcontent.title}
                    </p>
                    <span className="text-red py-1 text-truncate px-2 fs-12 fw-500 rounded-pill bg-light-red red-color">
                      {data.tabcontent.subtitle}
                    </span>
                  </div>

                  <div className="row mt-3">
                    {/* Card 1 */}
                    <div className="col-md-6 col-sm-12 col-12 mb-md-0 mb-3 ">
                      <div className="card h-100 card-body border-0 rounded-4 p-4">
                        <div className="row">
                          <div className="col-12">
                            <p className="fw-700 m-0 mb-2 fs-20">
                              {data.tabcontent.card1.title}
                            </p>
                            <span className="green-color fs-18 fw-500 d-flex gap-2 align-items-center">
                              {data.tabcontent.card1.subtitle}
                              <Icon title="caret" width="15px" height="15px" />
                            </span>
                          </div>
                          <div className="col-12 mt-3">
                            <Image
                              src={data.tabcontent.card1.image}
                              title={data.tabcontent.id}
                              alt={data.tabcontent.id}
                              className="img-width"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-6 col-sm-12 col-12 mb-md-0 mb-3 ">
                      <div className="card h-100 card-body border-0 rounded-4 p-4">
                        <div className="row">
                          <div className="col-12">
                            <p className="fw-300 m-0 mb-2 fs-20 light-black-1">
                              {data.tabcontent.card2.title}
                              <span className="fs-20 green-color fw-500 d-flex gap-2 align-items-center">
                                {data.tabcontent.card2.subtitle}
                                <Icon
                                  title="caret"
                                  width="15px"
                                  height="15px"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="col-12 mt-3">
                            <Image
                              src={data.tabcontent.card2.image}
                              title={data.tabcontent.id}
                              alt={data.tabcontent.id}
                              className="img-width"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* icon  */}
      <Icon
        title="Sales"
        classname="position-absolute sales-icon d-md-block d-none"
      />
    </section>
  );
};

export default SalesSolutions;
