import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useRooms from "./useRooms";
import RoomCard from "./RoomCard";

const RoomCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 0.5rem;
  font-family: inherit;
`;

const RoomGrid = () => {
  const { isPending: isLoading, rooms } = useRooms();

  if (isLoading) return <Spinner />;

  return (
    <RoomCardsContainer>
      {rooms.map((room) => (
        <RoomCard key={room.name} room={room} />
      ))}
    </RoomCardsContainer>
  );
};

export default RoomGrid;
