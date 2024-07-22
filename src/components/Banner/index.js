import { SiGoogleforms } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import { ImPlay } from "react-icons/im";
import { MdGroup } from "react-icons/md";
import Form from "../Form";
import "./index.css";

const Banner = () => (
  <div className="banner-section">
    <div className="banner-responsive-container">
      <div className="banner-content">
        <h1 className="banner-heading">Become ACCA in 18 months</h1>
        <p className="banner-description">
          Acquire globally recognized accountancy qualification.ACCA (also
          called as Global CA).and get placed in top MNCs & Bis Begin ACCA prep
          with 1FIN now.
        </p>
        <ul className="banner-content-cards">
          <li className="card-container">
            <p className="card-name">
              <SiGoogleforms size={20} /> User Registered
            </p>
            <p className="card-number">248,755</p>
          </li>
          <li className="card-container">
            <p className="card-name">
              <IoBookSharp size={20} /> Courses Enrolled
            </p>
            <p className="card-number">65,147</p>
          </li>
          <li className="card-container">
            <p className="card-name">
              <ImPlay size={20} /> Minutes Watched
            </p>
            <p className="card-number">2,088,021,687</p>
          </li>
          <li className="card-container">
            <p className="card-name">
              <MdGroup size={20} /> Faculty
            </p>
            <p className="card-number">8 Experts</p>
          </li>
        </ul>
        <div className="banner-content-buttons-container">
          <button className="download-button">Download Brochure</button>
          <button className="red-button">
            Silver Learning Partner
            <br />
            ACCA
          </button>
        </div>
      </div>
    </div>
    <Form />
  </div>
);

export default Banner;
