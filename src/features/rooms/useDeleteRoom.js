import toast from "react-hot-toast";
import { deleteRoom as deleteRoomApi } from "../../services/apiRooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteRoom = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteRoom, isPending: isDeleting } = useMutation({
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      toast.success("Room deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRoom };
};

export default useDeleteRoom;
