import { useParams } from "react-router";
import FormPage from "../../components/form/update";
import { getSigngleUserInAdmin } from "../../../../../api/admin";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../../components/loading";

const UsersUpdateView = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getSigngleUserInAdmin(id as string),
    enabled: !!id,
  });

  if (isError) {
    console.log("Error fetching user data");
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FormPage
          initialValues={{ email: data?.email || "", phone: data?.phone || "" }}
        />
      )}
    </>
  );
};

export default UsersUpdateView;
