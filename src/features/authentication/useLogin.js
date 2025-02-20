import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data.user);
      queryClient.setQueriesData(["user"], data.user);

      navigate("/dashboard");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoging };
}
