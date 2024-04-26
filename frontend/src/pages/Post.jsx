import { useContext, useEffect } from "react";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useFetchPost from "../features/posts/useFetchPost";
import NotifyToast from "../components/NotifyToast";
import useDeletePost from "../features/posts/useDeletePost";

const Post = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const { data: post } = useFetchPost(postId);

  const { mutate: deletePost } = useDeletePost();

  const handleDelete = async (id) => {
    try {
      deletePost(id, {
        onSuccess: () => {
          toast.success("Post deleted");

          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
      });
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    document.title = post?.data.payload.response.title;
  }, []);

  return (
    <>
      <main>
        <div className="min-h-screen flex justify-center gap-14">
          <div className="w-full max-w-[940px] mt-8 flex flex-col gap-4">
            <h1 className="font-bold text-2xl capitalize">
              {post?.data.payload.response.title}
            </h1>
            <div className="flex items-center gap-2">
              <div>
                <p className="font-semibold">
                  {post?.data.payload.response.user.username}
                </p>
                <p>
                  Posted {moment(post?.data.payload.response.date).fromNow()}
                </p>
              </div>
              {currentUser?.username ===
                post?.data.payload.response.user.username && (
                <div>
                  <button
                    onClick={() =>
                      navigate(`/edit/${post.data.payload.response.id}`)
                    }
                    className="btn btn-ghost btn-circle btn-xs"
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(postId)}
                    className="btn btn-ghost btn-circle btn-xs"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              )}
            </div>
            <img
              className="w-full max-w-[600px]"
              src={post?.data.payload.response.img}
            />
            <p
              className="text-left leading-5"
              dangerouslySetInnerHTML={{
                __html: post?.data.payload.response.desc,
              }}
            ></p>

            <div className="mt-6 flex items-center gap-6">
              <p className="text-lg">Tags</p>

              <div className="flex items-center">
                <a className="p-1 bg-neutral rounded-md text-sm font-semibold capitalize">
                  {post?.data.payload.response.tags}
                </a>
              </div>
            </div>
          </div>
        </div>
        <NotifyToast />
      </main>
    </>
  );
};

export default Post;
