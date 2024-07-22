import "./index.css";
import { BsBookHalf } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { MdAlarmOn } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";

const WhyChooseUs = () => (
  <div className="wcu-container">
    <h1 className="wcu-main-heading">Why Choose Us?</h1>
    <hr className="hr-line" />
    <section className="wcu-cards">
      <div className="wcu-card">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159505/ca_concept_nqnbru.png"
          alt="expert faculty"
          className="wcu-card-image"
        />
        <h1 className="wcu-card-heading">Expert Faculty</h1>
        <p className="wcu-card-description">
          Our Faculty are subject matter expertise with practical
          experience.They believe in StudentFirst principle
        </p>
      </div>
      <div className="wcu-card">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159513/ca_top_faculties_gghzdi.png"
          alt="package"
          className="wcu-card-image"
        />
        <h1 className="wcu-card-heading">Complete Success Package</h1>
        <p className="wcu-card-description">
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, E-notes from Kalpan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="wcu-card">
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159522/ca_unlimited_views_ahnykz.png"
          alt="placements"
          className="wcu-card-image"
        />
        <h1 className="wcu-card-heading">Placements</h1>
        <p className="wcu-card-description">
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </section>
    <section className="wcu-levels-container">
      <div className="wcu-level-card">
        <h1 className="wcu-level-heading">Levels</h1>
        <p className="wcu-level-description">
          <BsBookHalf size={20} className="wcu-level-icon" /> Three (13 papers)
        </p>
      </div>
      <div className="wcu-level-card">
        <h1 className="wcu-level-heading">Duration</h1>
        <p className="wcu-level-description">
          <MdAlarmOn size={20} className="wcu-level-icon" /> 6-30 months
        </p>
      </div>
      <div className="wcu-level-card">
        <h1 className="wcu-level-heading">Exams</h1>
        <p className="wcu-level-description">
          <GrPersonalComputer size={20} className="wcu-level-icon" />{" "}
          quarterly(Online)
        </p>
      </div>
      <div className="wcu-level-card">
        <h1 className="wcu-level-heading">Exemptions</h1>
        <p className="wcu-level-description">
          <BiCalendarCheck size={20} className="wcu-level-icon" /> Upto 9 papers
        </p>
      </div>
    </section>
  </div>
);

export default WhyChooseUs;
