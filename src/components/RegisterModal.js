import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormField from "./Form";
import PreForm from "./PreForm";

function RegisterModal({ handleShow, show, handleClose, score, initial }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Register Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {initial ? (
            <PreForm onHide={handleClose} />
          ) : (
            <FormField onHide={handleClose} score={score} />
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default RegisterModal;
