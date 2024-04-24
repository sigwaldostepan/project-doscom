import { useContext } from "react";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../context/authContext";
import { Link, useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axiosInstance";

const Post = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const { data: post } = useQuery({
    queryKey: [postId, "posts"],
    queryFn: async () => {
      return await axiosInstance.get(`/posts/${postId}`);
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.delete(`/posts/${id}`);
    },
  });

  const handleDelete = async (id) => {
    mutate(id);
  };

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
                <p>{moment(post?.data.payload.response.date).fromNow()}</p>
              </div>
              {currentUser?.username ===
                post?.data.payload.response.user.username && (
                <div>
                  <Link
                    to={`edit/${post?.data.payload.response.id}`}
                    className="btn btn-ghost btn-circle btn-xs"
                  >
                    <FaEdit size={16} />
                  </Link>
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
            <p className="text-left leading-5">
              {post?.data.payload.response.desc}
            </p>

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
      </main>
    </>
  );
};

export default Post;
