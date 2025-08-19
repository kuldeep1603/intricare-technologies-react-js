// ======== banner slider == use swiper js    ============

import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "../components/Icon";
import { Autoplay } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="container-fluid px-4 py-5 border-bottom ">
      <div className="row ">
        <div className="col-12">
          <Swiper
            modules={[Autoplay]}
            className="mySwiper"
            spaceBetween={10}
            speed={3000}
            slidesPerView={4}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1800: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="contact" width="35px" height="35px" />
                <div className="d-flex gap-1 align-items-center">
                  <span className="light-black-1">Access to</span>
                  <p className="fw-600 secondary-color-1 m-0">700M+ Contacts</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="click-hand" width="30px" height="30px" />
                <div className="d-flex gap-1 align-items-center">
                  <p className="fw-600 secondary-color-1 m-0">One click push</p>
                  <span className="light-black-1">to CRM</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="mapping" width="35px" height="35px" />
                <div className="d-flex gap-1 align-items-center">
                  <p className="fw-600 secondary-color-1 m-0">Custom Field </p>
                  <span className="light-black-1">Mapping</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="waterfall-1" width="30px" height="30px" />
                <div className="d-flex gap-1 align-items-center">
                  <span className="light-black-1">Advanced</span>
                  <p className="fw-600 secondary-color-1 m-0 ">Waterfall</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="contact" width="35px" height="35px" />
                <div className="d-flex gap-1 align-items-center">
                  <span className="light-black-1">Access to</span>
                  <p className="fw-600 secondary-color-1 m-0">700M+ Contacts</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="click-hand" width="30px" height="30px" />
                <div className="d-flex gap-1 align-items-center">
                  <p className="fw-600 secondary-color-1 m-0">One click push</p>
                  <span className="light-black-1">to CRM</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="mapping" width="35px" height="35px" />
                <div className="d-flex gap-1 align-items-center">
                  <p className="fw-600 secondary-color-1 m-0">Custom Field </p>
                  <span className="light-black-1">Mapping</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" border-0 d-flex gap-2 align-items-center">
                <Icon title="waterfall-1" width="30px" height="30px" />
                <div className="d-flex gap-1 align-items-center">
                  <span className="light-black-1">Advanced</span>
                  <p className="fw-600 secondary-color-1 m-0 ">Waterfall</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
