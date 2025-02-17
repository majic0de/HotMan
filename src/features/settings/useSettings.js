import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

const useSettings = () => {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isPending, settings, error };
};

export default useSettings;
