import { useState } from "react";
import Button from "../../ui/Button";
import CreateRoomForm from "./CreateRoomForm";

const AddRoom = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button
        size="large"
        variation="primary"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new Room
      </Button>

      {isOpenModal && <CreateRoomForm />}
    </>
  );
};

export default AddRoom;
