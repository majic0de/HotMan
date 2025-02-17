import supabase, { supabaseUrl } from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error fetching rooms", error);
    throw new Error("Rooms could not be fetched");
  }

  return data;
}

export async function createRoom(newRoom) {
  const imageName = `${Math.random()}-${newRoom.image.name}`.replace(/\s/g, "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/room-images/${imageName}`;

  // 1. Create room
  const { data, error } = await supabase
    .from("rooms")
    .insert([{ ...newRoom, image: imagePath }])
    .select();

  if (error) {
    console.error("Error creating rooms", error);
    throw new Error("Room could not be created");
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("room-images")
    .upload(imageName, newRoom.image);

  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data[0].id);

    console.error("Error uploading image room", storageError);
    throw new Error(
      "Room inage could not be uploaded and room was not created"
    );
  }

  return data;
}

export async function deleteRoom(roomId) {
  const { data, error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", roomId);

  if (error) {
    console.error("Error deleting rooms", error);
    throw new Error("Room could not be deleted");
  }

  return data;
}
