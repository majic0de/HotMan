import toast from "react-hot-toast";
import { createRoom as createRoomApi } from "../../services/apiRooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateRoom = () => {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isPending: isCreating } = useMutation({
    mutationFn: createRoomApi,
    onSuccess: () => {
      toast.success("Room created successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRoom };
};

export default useCreateRoom;
