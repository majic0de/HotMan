import DashboardLayout from "../features/dashboard/DashboardLayout";
import VStack from "../ui/VStack";
import HStack from "../ui/HStack";
import Heading from "../ui/Heading";

const Dashboard = () => {
  return (
    <>
      <HStack>
        <Heading as="h1">Dashboard</Heading>
        <p>Filters</p>
      </HStack>
      <VStack>
        <DashboardLayout />
      </VStack>
    </>
  );
};

export default Dashboard;
