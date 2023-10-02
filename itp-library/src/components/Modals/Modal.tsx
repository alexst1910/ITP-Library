import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Modals/Modal.module.css";
const Modal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>
      <div
        className="modal modal-dialog modal-dialog-centered "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content rounded-0">
            <div className="modal-header border-0 pb-0">
              <h1
                className={`modal-title fs-6 ms-4 fw-semibold ${classes.modalText}`}
                id="staticBackdropLabel"
              >
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="me-2 fs-4"
                  style={{ color: "#c69c00" }}
                />{" "}
                Confirmation
              </h1>
            </div>
            <div
              className={`modal-body ${classes.modalText} ${classes.modalBody} ms-5 pt-0`}
            >
              Confirm order detail changes?
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
