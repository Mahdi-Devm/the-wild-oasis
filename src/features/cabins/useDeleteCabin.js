import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletecabin as deleteApi } from "../../services/apicabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isdeleteing, mutate: deletecabin } = useMutation({
    mutationFn: deleteApi,
    onSuccess: () => {
      toast.success("Cabin success");

      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isdeleteing, deletecabin };
}
