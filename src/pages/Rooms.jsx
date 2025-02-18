import Heading from "../ui/Heading";
import VStack from "../ui/VStack";
import HStack from "../ui/HStack";

import AddRoom from "../features/rooms/AddRoom";
import RoomTable from "../features/rooms/RoomTable";

const Rooms = () => {
  return (
    <>
      <HStack>
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </HStack>
      <VStack>
        <RoomTable />
        <AddRoom />
      </VStack>
    </>
  );
};

export default Rooms;
