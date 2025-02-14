import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useRooms from "./useRooms";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const RoomCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 0.5rem;
  font-family: inherit;
`;

const RoomCard = styled.div`
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

const RoomGrid = () => {
  const { isPending: isLoading, rooms } = useRooms();

  if (isLoading) return <Spinner />;

  return (
    <RoomCardsContainer>
      {rooms.map(
        ({ name, maxCapacity, regularPrice, discount, description, image }) => (
          <RoomCard key={name}>
            <img src={image} alt={name} />
            <RoomCardContent>
              <Heading as="h2">{name}</Heading>
              <div>Maximum capacity: {maxCapacity}</div>
              <div>Regular price: {regularPrice}</div>
              <div>Discount: {discount}</div>
              <div>Description: {description}</div>
            </RoomCardContent>
            <RoomCardAction>
              <Button size="small" variation="primary">
                Delete
              </Button>
            </RoomCardAction>
          </RoomCard>
        )
      )}
    </RoomCardsContainer>
  );
};

export default RoomGrid;
