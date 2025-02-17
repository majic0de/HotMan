import { useState } from "react";

import Heading from "../ui/Heading";
import VStack from "../ui/VStack";
import HStack from "../ui/HStack";
import Button from "../ui/Button";

import RoomsGrid from "../features/rooms/RoomsGrid";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

const Rooms = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <HStack>
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </HStack>
      <VStack>
        <RoomsGrid />
        <Button
          size="large"
          variation="primary"
          onClick={() => setIsOpenModal((show) => !show)}
        >
          Add new Room
        </Button>

        {isOpenModal && <CreateRoomForm />}
      </VStack>
    </>
  );
};

export default Rooms;
