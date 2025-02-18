import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import RoomRow from "./RoomRow";
import useRooms from "./useRooms";

const RoomTable = () => {
  const { isPending, rooms } = useRooms();

  if (isPending) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>Room</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={rooms}
        render={(room) => <RoomRow room={room} key={room.id} />}
      />
      <Table.Footer />
    </Table>
  );
};

export default RoomTable;
