import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditeCabin } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createcabin, isLoading } = useMutation({
    mutationFn: createEditeCabin,
    onSuccess: () => {
      toast.success("New cabin created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
        refetchInactive: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createcabin, isLoading };
}

export default useCreateCabin;
