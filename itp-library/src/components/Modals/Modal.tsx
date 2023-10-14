import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Modals/Modal.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const { setButtonValue } = useContext(ShoppingCartContext);
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button> */}
      <div
        className={`modal modal-dialog modal-dialog-centered ${
          show ? "modal" : ""
        }`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className="modal-dialog ">
          <div className="modal-content rounded-0">
            <div className="modal-header border-0 pb-0 d-flex justify-content-start">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="me-1 fs-3"
                style={{ color: "#c69c00" }}
              />{" "}
              <h1
                className={`modal-title fs-6 ms-3 fw-semibold ${classes.modalText}`}
                id="staticBackdropLabel"
              >
                Confirmation
              </h1>
            </div>
            <div
              className={`modal-body ${classes.modalText} ${classes.modalBody} ms-5 ps-3 pt-0`}
            >
              Confirm order detail changes?
            </div>
            <div className="modal-footer border-0">
              <Link to="/orders">
                {" "}
                <button
                  type="button"
                  className={`btn border-dark ${classes.buttonText}`}
                  data-bs-dismiss="modal"
                  onClick={() => {
                    onClose();
                    // setButtonValue("Place Order");
                  }}
                >
                  Close
                </button>
              </Link>
              <Link to="/orders">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                  onClick={onClose}
                >
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
