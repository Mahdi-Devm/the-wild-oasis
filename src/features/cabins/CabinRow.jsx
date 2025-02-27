import PropTypes from "prop-types";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useDeleateCabin } from "./useDeletCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;
  const { isdeleteing, deletecabin } = useDeleateCabin();
  const { createcabin, isLoading } = useCreateCabin();
  function handelDup() {
    createcabin({
      name: `Cope of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }
  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fite up ti {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>- -</span>
        )}
        <div>
          <button onClick={handelDup}>Dep</button>
          <Modal>
            <Modal.Open opens="edit">
              <button>Edit</button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            <Modal.Open>
              <button disabled={isdeleteing}>Delete</button>
            </Modal.Open>
            <Modal.Window>
              <ConfirmDelete
                resourceName="cabin"
                disabled={isdeleteing}
                onConfirm={() => deletecabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}
CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    discount: PropTypes.number,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CabinRow;
