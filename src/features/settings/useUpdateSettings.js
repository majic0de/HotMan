import { useMutation } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

const useUpdateSettings = () => {
  const { mutate: updateSettings, isPending } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Settings updated successfully");
    },
  });

  return { updateSettings, isPending };
};

export default useUpdateSettings;
