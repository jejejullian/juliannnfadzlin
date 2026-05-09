import { createClient } from '@supabase/supabase-js';

// Ambil URL dan Key dari Environment Variable Vercel
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// -------------------------------------------------------
// AUTH (Menggunakan Supabase Auth)
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
    .from('Project') // Pastikan nama tabel sesuai di Supabase (besar/kecil huruf berpengaruh)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

// -------------------------------------------------------
// PROJECTS - CREATE
// -------------------------------------------------------
export const createProject = async (projectData) => {
  const { data, error } = await supabase
    .from('Project')
    .insert([projectData])
    .select();

  if (error) throw new Error(error.message);
  return data;
};

// -------------------------------------------------------
// PROJECTS - UPDATE
// -------------------------------------------------------
export const updateProject = async (id, updateData) => {
  const { data, error } = await supabase
    .from('Project')
    .update(updateData)
    .eq('id', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
};

// -------------------------------------------------------
// PROJECTS - DELETE
// -------------------------------------------------------
export const deleteProject = async (id) => {
  const { error } = await supabase
    .from('Project')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
  return true;
};