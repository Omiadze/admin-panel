import { User } from "../../../api/admin";
import { setTimeConvertion } from "./time-convertion";

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    createdAt: setTimeConvertion(user?.confirmed_at),
    phone: user?.phone ? user?.phone : "_",
    lastSignIn: setTimeConvertion(user?.last_sign_in_at),
    id: user?.id,
    key: user?.id,
  }));
};
