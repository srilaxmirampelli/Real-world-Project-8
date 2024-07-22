import "./index.css";

const WhatWillYouLearn = () => (
  <div className="wwyl-container">
    <h1 className="wcu-main-heading">What will you Learn in ACCA?</h1>
    <hr className="hr-line" />
    <div className="wwyl-learn-cards">
      <div className="wwyl-learn-card">
        <h1 className="wwyl-learn-card-heading">Knowledge Level</h1>
        <ul className="wwyl-card-list-items">
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
        <h1 className="wwyl-footer">3 Papers</h1>
      </div>
      <div className="wwyl-learn-card">
        <h1 className="wwyl-learn-card-heading">Skill Level</h1>
        <ul className="wwyl-card-list-items">
          <li>Corporate ans Business law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
        <h1 className="wwyl-footer">6 Papers</h1>
      </div>
      <div className="wwyl-learn-card">
        <h1 className="wwyl-learn-card-heading">Professional Level</h1>
        <ul className="wwyl-card-list-items">
          <li>SBL - Strategic Business Leader</li>
          <li>SBR - Strategic Business Reporting</li>
        </ul>
        <h3 className="wwyl-learn-sub-heading">Two out of the following</h3>
        <ul className="wwyl-card-list-items">
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APFM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <h1 className="wwyl-footer">3 Papers</h1>
      </div>
    </div>
  </div>
);

export default WhatWillYouLearn;
