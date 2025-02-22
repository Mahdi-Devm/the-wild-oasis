import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}

export async function createCabin(newcabin) {
  const imageName = `${Math.random()}-${newcabin.imageName}`.replace(/\//g, "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data: imageData, error: imageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newcabin.image);

  if (imageError) {
    console.error("Image upload failed:", imageError.message);
    throw new Error("Image upload failed");
  }

  const cabinWithImage = { ...newcabin, image: imagePath };

  const { data: cabinData, error: cabinError } = await supabase
    .from("cabins")
    .insert([cabinWithImage])
    .select("id, name");

  if (cabinError) {
    console.error(cabinError);
    throw new Error("Cabin could not be created");
  }

  return cabinData;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
