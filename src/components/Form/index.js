import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./index.css";

class Banner extends Component {
  state = {
    phoneNumber: "",
    emailId: "",
    qualification: "",
    level: "",
    isActive: false,
  };

  onChangePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  onChangeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };

  onChangeQualification = (event) => {
    this.setState({ qualification: event.target.value });
  };

  onChangeLevel = (event) => {
    this.setState({ level: event.target.value });
  };

  onClickCloseButton = () => {
    this.setState({ isActive: false });
  };

  renderModal = () => {
    const { isActive } = this.state;
    return (
      <Modal
        className="modal-container"
        show={isActive}
        onHide={this.onClickCloseButton}
      >
        <div className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">
              Your Response Has Been Recorded
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            One of our Executive will reach out to you
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={this.onClickCloseButton}
              className="modal-close-btn"
            >
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    );
  };

  onSubmitBannerForm = (event) => {
    event.preventDefault();
    this.setState({ isActive: true });
  };

  render() {
    const { phoneNumber, emailId, qualification, level, isActive } = this.state;
    return (
      <>
        <div className="banner-form-container">
          <h1 className="form-heading">
            Aspiring to be an ACCA?Get in touch with us!
          </h1>
          <form onSubmit={this.onSubmitBannerForm}>
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field"
              value={phoneNumber}
              onChange={this.onChangePhoneNumber}
            />
            <input
              type="text"
              placeholder="Email Address"
              className="input-field"
              value={emailId}
              onChange={this.onChangeEmailId}
            />
            <select
              placeholder="Current Qualification"
              value={qualification}
              id="Qualification"
              className="select-input-field"
              onChange={this.onChangeQualification}
            >
              <option value="" hidden className="options">
                Current Qualification
              </option>
              <option value="BSC" className="options">
                BSC
              </option>
              <option value="BCOM" className="options">
                BCOM
              </option>
              <option value="B.TECH" className="options">
                B.TECH
              </option>
              <option value="CSE" className="options">
                CSE
              </option>
              <option value="Other" className="options">
                Other
              </option>
            </select>
            <select
              id="QualificationInterest"
              value={level}
              placeholder="Current Qualification"
              className="select-input-field"
              onChange={this.onChangeLevel}
            >
              <option value="" hidden className="options">
                Interested In
              </option>
              <option value="ACCA Level I" className="options">
                ACCA Level I
              </option>
              <option value="ACCA Level II" className="options">
                ACCA Level II
              </option>
              <option value="ACCA Level III" className="options">
                ACCA Level III{" "}
              </option>
            </select>
            <button type="submit" className="request-call-button">
              Request Call Back
            </button>
          </form>
        </div>

        {isActive && this.renderModal()}
      </>
    );
  }
}

export default Banner;
