import { User } from "../../api/admin";
import { blogs } from "../../api/blogs";
import { setTimeConvertion } from "./time-convertion";

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    createdAt: setTimeConvertion(user?.confirmed_at || ""),
    phone: user?.phone ? user?.phone : "_",
    lastSignIn: setTimeConvertion(user?.last_sign_in_at || ""),
    id: user?.id,
    key: user?.id,
  }));
};

export const mapBlogsListForAdmin = (blogs: blogs[]) => {
  return blogs?.map((blog) => ({
    key: blog?.id,
    id: blog?.id,
    title_en: blog?.title_en,
    description_en: blog?.description_en,
    createdAt: setTimeConvertion(blog?.created_at),
    imageUrl: blog?.image_url,
  }));
};
