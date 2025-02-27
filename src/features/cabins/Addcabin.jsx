import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
function Addcabin() {
  return (
    <Modal>
      <Modal.Open opens="cebin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}

// function Addcabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   return (
//     <div>
//       {" "}
//       <Button onClick={() => setisOpenModal(!isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onclose={() => setisOpenModal(false)}>
//           <CreateCabinForm onclose={() => setisOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default Addcabin;
