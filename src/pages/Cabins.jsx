import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <button onClick={() => setShowForm(!showForm)}>Add new cabin</button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
