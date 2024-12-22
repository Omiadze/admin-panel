import { useParams } from "react-router";
import BlogFormPage from "../../components/form/update";
import Loading from "../../../../../components/loading";
import { useGetBlogById } from "../../../../../react-query/query/dashboard/blogs";

const BlogsUpdateView = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetBlogById({
    id: id || "",
    queryOptions: {
      select: (blog) => ({
        title_en: blog.title_en,
        description_en: blog.description_en,
      }),
    },
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
