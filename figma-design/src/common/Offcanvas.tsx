import Image from "../components/Image";

const Offcanvas = () => {
  return (
    // small screen / device offcanvas
    <div
      className="offcanvas offcanvas-start"
      id="navbarSupportedContent"
      aria-labelledby="navbarSupportedContentLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="navbarSupportedContentLabel">
          <Image
            src="/assets/img/LeadCRM-logo.webp"
            alt="logo"
            width="140px"
            height="140px"
          />
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="">
          <li className="nav-item dropdown mb-3">
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
          <li className="nav-item dropdown mb-3">
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
          <li className="nav-item dropdown mb-3">
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
          <li className="nav-item dropdown mb-3">
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
      </div>
    </div>
    // small screen / device offcanvas
  );
};

export default Offcanvas;
