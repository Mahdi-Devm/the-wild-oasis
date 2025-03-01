import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterdield="discount"
        options={[
          { value: "all", lable: "ALL" },
          { value: "no-discount", lable: "No discount" },
          { value: "whit-discount", lable: "Whit discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
