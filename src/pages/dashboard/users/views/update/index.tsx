import { useParams } from "react-router";
import FormPage from "../../components/form/update";
import Loading from "../../../../../components/loading";
import { useGetSingleUserInAdmin } from "../../../../../react-query/query/dashboard/users";

const UsersUpdateView = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleUserInAdmin({
    id: id || "",
    queryOptions: {
      select: (user) => ({
        phone: user.phone,
        email: user.email,
        // Additional transformations if needed
      }),
    },
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
