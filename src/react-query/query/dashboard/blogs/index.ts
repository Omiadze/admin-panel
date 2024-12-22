import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { blogs, getBlogs, getSingleBlog } from "../../../../api/blogs";

export const useGetBlogs = <T>({
  queryOptions,
}: {
  queryOptions: Omit<UseQueryOptions<blogs[], unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  return useQuery<blogs[], unknown, T>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    ...queryOptions,
  });
};

export const useGetBlogById = <T>({
  id,
  queryOptions,
}: {
  id: string;
  queryOptions: Omit<UseQueryOptions<blogs, unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  return useQuery<blogs, unknown, T>({
    queryKey: ["blog", id],
    queryFn: async () => getSingleBlog(id),
    enabled: !!id,
    ...queryOptions,
  });
};
