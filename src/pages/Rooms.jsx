import Heading from "../ui/Heading";
import VStack from "../ui/VStack";
import HStack from "../ui/HStack";

import RoomsGrid from "../features/rooms/RoomsGrid";

const Rooms = () => {
  return (
    <>
      <HStack>
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </HStack>
      <VStack>
        <RoomsGrid />
      </VStack>
    </>
  );
};

export default Rooms;
