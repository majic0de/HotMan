import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

const useRooms = () => {
  const {
    isPending,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { isPending, rooms, error };
};

export default useRooms;
