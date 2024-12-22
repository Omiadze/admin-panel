import { supabase } from "../../supabase";

export type BlogCreateTypes = {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
};

export type blogs = {
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

export const getBlogs = async (): Promise<blogs[]> => {
  const { data, error } = await supabase.from("Blogs").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data as blogs[];
};

export const getSingleBlog = async (id: string): Promise<blogs> => {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as blogs;
};

export const updateBlogInAdmin = async (
  id: string,
  updatedData: { title_en: string; description_en: string }
) => {
  const { data, error } = await supabase
    .from("Blogs")
    .update({
      title_en: updatedData.title_en,
      description_en: updatedData.description_en,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createBlogs = async (data: BlogCreateTypes): Promise<void> => {
  try {
    // console.log("Uploading file:", data.image_file.name); // Log the image file data
    // const uploadResponse = await supabase.storage
    //   .from("blog_images")
    //   .upload(data?.image_file.name, data?.image_file);

    // if (uploadResponse.error) {
    //   console.error("Supabase upload error:", uploadResponse.error.message);
    //   throw new Error(uploadResponse.error.message);
    // }

    // if (uploadResponse.data) {
    //   const filePath = uploadResponse.data.path;
    //   console.log("Uploaded file path:", filePath); // Log the file path

    const insertResponse = await supabase.from("Blogs").insert({
      title_en: data.title_en,
      title_ka: data.title_ka,
      description_en: data.description_en,
      description_ka: data.description_ka,
      // image_url: filePath, // Use the file path returned by Supabase
    });

    if (insertResponse.error) {
      console.error("Supabase insert error:", insertResponse.error.message);
      throw new Error(insertResponse.error.message);
    }

    //     alert("You successfully created the blog!");
    //   } else {
    //     throw new Error("File upload failed, no data returned.");
    //   }
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};
