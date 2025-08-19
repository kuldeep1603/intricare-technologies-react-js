// ======== testimonials section === use --swiper js ============

import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "../components/Icon";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <section className="section testimonials position-relative">
        <div className="conatiner-fluid px-4">
          <div className="row">
            <div className="col-12 ">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-600 secondary-font  main-title secondary-color-1 text-capitalize">
                  What people are saying about LeadCRM
                </h4>
                <div className="d-flex gap-2">
                  <div className="custom-prev">
                    <Icon
                      title="arrow-right"
                      width="15px"
                      height="15px"
                      style={{ rotate: "180deg" }}
                    />
                  </div>
                  <div className="custom-next">
                    <Icon title="arrow-right" width="15px" height="15px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={3}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                breakpoints={{
                  250: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  450: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  800: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1500: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1800: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{ delay: 2000 }}
                loop={true}
              >
                {/* dynamic testimonials cards  */}
                {[...Array(10)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="card border-0 card-body p-4 bg-fourth-color rounded-4">
                      <span className="fs-16 light-black fw-500 ">
                        “Reliable Data Sync I’ve only had to refresh the
                        extension a couple of times. The multi-contact
                        enrichment is still a huge plus, and support is very
                        responsive.“
                      </span>
                      <div className="d-flex gap-2 align-items-center mt-3">
                        <Icon
                          title="playstore"
                          width="35px"
                          height="35px"
                          classname="bg-white  p-2 rounded-2 d-flex justify-content-center align-items-center"
                        />
                        <div className="d-flex gap-1 align-items-center gap-1">
                          {[...Array(5)].map((_, index) => (
                            <Icon
                              key={index}
                              title="star"
                              classname="text-black"
                              width="18px"
                              height="18px"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="footer mt-5 pt-2 border-top">
                        <div className="d-flex gap-3 align-items-center">
                          <Icon title="user" width="35px" height="35px" />
                          <div className="">
                            <b className="secondary-color-1 d-block fs-18">
                              David Fincher
                            </b>
                            <span className="light-black fs-14 d-block">
                              On Capterra
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Icon
          title="ball"
          classname="position-absolute ball-icon d-md-block d-none"
        />
      </section>
    </>
  );
};

export default Testimonials;
