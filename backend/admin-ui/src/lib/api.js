
Copy

import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 
// -------------------------------------------------------
// HELPERS
// -------------------------------------------------------
 
export const uploadImage = async (file) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
  const filePath = `project-images/${fileName}`;
 
  const { data, error } = await supabase.storage
    .from("portfolio-assets")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });
 
  if (error) throw new Error("Gagal upload gambar: " + error.message);
 
  // Pakai data.path dari response upload (bukan filePath langsung)
  const { data: { publicUrl } } = supabase.storage
    .from("portfolio-assets")
    .getPublicUrl(data.path);
 
  return publicUrl;
};
 
// -------------------------------------------------------
// AUTH
// -------------------------------------------------------
export const loginApi = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
};
 
// -------------------------------------------------------
// PROJECTS - GET ALL
// -------------------------------------------------------
export const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("Project")
    .select("*")
    .order("createdAt", { ascending: false });
 
  if (error) throw new Error(error.message);
  return data;
};
 
// -------------------------------------------------------
// PROJECTS - CREATE
// -------------------------------------------------------
export const createProject = async (projectData) => {
  const { data, error } = await supabase
    .from("Project")
    .insert([projectData])
    .select();
 
  if (error) throw new Error(error.message);
  return data[0];
};
 
// -------------------------------------------------------
// PROJECTS - UPDATE
// -------------------------------------------------------
export const updateProject = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Project")
    .update(updateData)
    .eq("id", id)
    .select();
 
  if (error) throw new Error(error.message);
  return data[0];
};
 
// -------------------------------------------------------
// PROJECTS - DELETE
// -------------------------------------------------------
export const deleteProject = async (id) => {
  const { error } = await supabase
    .from("Project")
    .delete()
    .eq("id", id);
 
  if (error) throw new Error(error.message);
  return true;
};