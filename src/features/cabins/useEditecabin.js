import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditeCabin } from "../../services/apiSettings";

function useEditecabin() {
  const queryClient = useQueryClient();
  const { mutate: editecabin, isLoading: isediteing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditeCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("cibin succsessfully edite");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
        refetchInactive: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editecabin, isediteing };
}

export default useEditecabin;
