import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function Addcabin() {
  const [isOpenModal, setisOpenModal] = useState(false);
  return (
    <div>
      {" "}
      <Button onClick={() => setisOpenModal(!isOpenModal)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default Addcabin;
