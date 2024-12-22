import { supabase } from "../../supabase";

export type User = {
  id: string;
  aud: string;
  role?: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: [string];
  };
  user_metadata: object;
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
} | null;

export const getUsersListInAdmin = () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });
};

export const updateUserInAdmin = (
  id: string,
  payload: { email: string; phone: string }
) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};

export const getSigngleUserInAdmin = (id: string): Promise<User> => {
  return supabase.auth.admin.getUserById(id).then((res) => {
    if (!res.data.user) {
      return null;
    }
    return res.data.user;
  });
};

export const register = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error?.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("auth");
    }
  });
};
export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error?.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      console.log(res?.error?.status);
      throw new Error("auth");
    }
    return {
      res,
    };
  });
};
export const logout = () => {
  return supabase.auth.signOut();
};
