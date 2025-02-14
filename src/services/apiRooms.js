import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error fetching rooms", error);
    throw new Error("Rooms could not be fetched");
  }

  return data;
}

export async function createRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();

  if (error) {
    console.error("Error creating rooms", error);
    throw new Error("Room could not be ceated");
  }

  return data;
}
