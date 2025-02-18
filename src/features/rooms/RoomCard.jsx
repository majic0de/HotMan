/* eslint-disable react/prop-types */
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

import useDeleteRoom from "./useDeleteRoom";
import { formatCurrency } from "../../utils/helpers";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

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

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 500;
  color: var(--color-green-700);
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
        <Price>Regular price: {formatCurrency(regularPrice)}</Price>
        <Discount>
          Discount: {discount ? formatCurrency(discount) : "-"}
        </Discount>
        <div>Description: {description}</div>
      </RoomCardContent>
      <RoomCardAction>
        <Modal>
          <Modal.Open opens="delete-room">
            <Button size="small" variation="primary">
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-room">
            <ConfirmDelete
              resource={"room"}
              onConfirm={() => deleteRoom(roomId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </RoomCardAction>
    </RoomCardStyled>
  );
};

export default RoomCard;
