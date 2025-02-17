/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import useDeleteRoom from "./useDeleteRoom";

const RoomCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

const RoomCardContent = styled.div`
  padding: 1.6rem;
`;

const RoomCardAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  background-color: var(--color-grey-100);
`;

const RoomCard = ({
  room: {
    id: roomId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  },
}) => {
  const { deleteRoom, isDeleting } = useDeleteRoom();
  return (
    <RoomCardStyled>
      <img src={image} alt={name} />
      <RoomCardContent>
        <Heading as="h2">{name}</Heading>
        <div>Maximum capacity: {maxCapacity}</div>
        <div>Regular price: {regularPrice}</div>
        <div>Discount: {discount}</div>
        <div>Description: {description}</div>
      </RoomCardContent>
      <RoomCardAction>
        <Button
          size="small"
          variation="primary"
          disabled={isDeleting}
          onClick={() => deleteRoom(roomId)}
        >
          {isDeleting ? "Is deleting..." : "Delete"}
        </Button>
      </RoomCardAction>
    </RoomCardStyled>
  );
};

export default RoomCard;
