import UpdateSettingsForm from "../features/settings/updateSettingsForm";
import useSettings from "../features/settings/useSettings";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import VStack from "../ui/VStack";

const Settings = () => {
  const { isPending, settings } = useSettings();

  return (
    <VStack>
      <Heading as="h1">Settings</Heading>
      {isPending ? <Spinner /> : <UpdateSettingsForm settings={settings} />}
    </VStack>
  );
};

export default Settings;
