import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("cabins could not loaded");
  }
  return data;
}

export async function deletecabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log("cabins could not delet");
  }
  return data;
}
