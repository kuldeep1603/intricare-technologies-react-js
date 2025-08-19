import { useEffect } from "react";
import Image from "../components/Image";
import Button from "../components/Button";
import Offcanvas from "./Offcanvas";

const Appbar = () => {
  // added shadow classes when user scroll y to 20 and even clean up the event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.querySelector(".navbar")?.classList.add("shadow");
      } else {
        document.querySelector(".navbar")?.classList.remove("shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* appbar  */}
      <nav className="navbar navbar-expand-lg py-2 bg-white top-0 position-sticky z-3">
        <div className="container-fluid px-4">
          {/* logo  */}
          <a className="navbar-brand" href="#">
            <Image
              src="/assets/img/LeadCRM-logo.webp"
              alt="logo"
              width="140px"
              height="140px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="#">
            {/* menus  */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link px-3 text-black dropdown-toggle"
                  href="#"
                  id="Product"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LeadCRM Alternatives
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item  dropdown">
                <a
                  className="nav-link px-3 text-black dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LeadCRM Alternatives
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link px-3 text-black dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LeadCRM Alternatives
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-black  px-3 dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LeadCRM Alternatives
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex gap-2">
              <Button
                title="Get Your Free Account"
                type="button"
                classname="px-4 py-2 bg-primary-1 text-white border-0 primary-btn"
              />
              <Button
                title="Login"
                type="button"
                icon
                iconTitle="login"
                classname="px-3 py-2 bg-white primary-color-1 tertiary-btn border-primary-all gap-2 d-flex align-items-center"
              />
            </form>
          </div>
        </div>
      </nav>
      {/* appbar  */}

      {/* offcanvas for small device navbar  */}
      <Offcanvas />
    </>
  );
};

export default Appbar;
