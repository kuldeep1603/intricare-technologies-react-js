import "./App.css";
import Appbar from "./common/Appbar";
import Banner from "./sections/Banner";
import BannerSlider from "./sections/Banner-slider";
import "../node_modules/swiper/swiper-bundle.min.css";
import Works from "./sections/Works";
import Supported from "./sections/Supported";
import StartToday from "./sections/StartToday";
import Footer from "./common/Footer";
// import Testimonials from "./sections/testimonials";
import Testimonials from "./sections/Testimonials";
import SalesSolutions from "./sections/SalesSolutions";
import Daily from "./sections/Daily";

function App() {
  return (
    <>
      <Appbar />
      <Banner />
      <BannerSlider />
      <Daily />
      <Works />
      <Testimonials />
      <SalesSolutions />
      <Supported />
      <StartToday />
      <Footer />
    </>
  );
}

export default App;
