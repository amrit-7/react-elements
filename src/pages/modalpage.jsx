import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/buttons";

const ModalPage = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  const actionButton = (
    <div>
      <Button primary> Done</Button>
    </div>
  );
  const modal = (
    <Modal setShow={setShow} actionButton={actionButton}>
      <p> This is a modal demo </p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleModal} primary rounded>
        Open Modal
      </Button>
      {show ? modal : null}
    </div>
  );
};

export default ModalPage;
