import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import BlogFormPage from "../../components/form/update";
import { getSingleBlog } from "../../../../../api/blogs";
import Loading from "../../../../../components/loading";

const BlogsUpdateView = () => {
  const { id } = useParams();

  // Fetch blog data by ID
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getSingleBlog(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading blog data.</div>;
  }

  return (
    <BlogFormPage
      initialValues={{
        title_en: data?.title_en || "",
        description_en: data?.description_en || "",
      }}
    />
  );
};

export default BlogsUpdateView;
