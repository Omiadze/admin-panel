import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  getSigngleUserInAdmin,
  getUsersListInAdmin,
  User,
} from "../../../../api/admin";

export const useGetUsersListInAdminv = <T>({
  queryOptions,
}: {
  queryOptions: Omit<UseQueryOptions<User[], unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  return useQuery<User[], unknown, T>({
    queryKey: ["users"],
    queryFn: getUsersListInAdmin,
    ...queryOptions,
  });
};

export const useGetSingleUserInAdmin = <T>({
  id,
  queryOptions,
}: {
  id: string;
  queryOptions: Omit<UseQueryOptions<User, unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  return useQuery<User, unknown, T>({
    queryKey: ["user", id],
    queryFn: () => getSigngleUserInAdmin(id),
    enabled: !!id,
    ...queryOptions,
  });
};
