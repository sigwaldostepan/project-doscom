import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import ReactQuill from "react-quill";
import Button from "../components/Button";
import toast, { Toaster } from "react-hot-toast";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import useEditPost from "../features/posts/useEditPost";
import useFetchPost from "../features/posts/useFetchPost";
import moment from "moment";
import isDataEmpty from "../lib/isDataEmpty";

const EditPost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const { data: post } = useFetchPost(postId);

  const [title, setTitle] = useState(post?.data.payload.response.title);
  const [desc, setDesc] = useState(post?.data.payload.response.desc);
  const [img, setImg] = useState(post?.data.payload.response.img);
  const [tags, setTags] = useState(post?.data.payload.response.tags);

  const { mutate: editPost } = useEditPost(postId);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      desc,
      img,
      tags: tags?.target?.id,
      date: moment(Date.now()).toISOString(),
      username: currentUser.username,
    };

    const hasNull = isDataEmpty(data);

    // check if data field empty return error, check if user not logged in return error
    if (hasNull) return toast.error("Please fill all field!");
    if (!currentUser) return toast.error("Login first!");

    editPost(data, {
      onSuccess: () => {
        toast.success("Post updated");
        return setTimeout(() => {
          navigate("/");
        }, 1500);
      },
    });
  };

  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[940px] flex gap-6">
            <div className="w-full max-w-[720px] flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered border-gray-300"
              />
              <ReactQuill
                theme="snow"
                value={desc}
                onChange={setDesc}
                className={`h-[300px] text-info`}
              />
            </div>
            <form
              className="w-[360px] flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full p-4 flex flex-col gap-4 border border-gray-300 rounded-md">
                <h2 className="font-bold text-xl">Publish</h2>
                <label className="flex flex-col gap-2" htmlFor="image">
                  Add image
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    className="input input-bordered border-gray-300"
                  />
                </label>
                <Button type={"submit"} message={"Publish"} />
              </div>
              <div className="w-full p-4 flex flex-col gap-4 border border-gray-300 rounded-md">
                <h2 className="font-bold text-2xl">Tags</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      value="sport"
                      type="radio"
                      id="sport"
                      name="tags"
                      className="radio"
                      onChange={(e) => setTags(e)}
                    />
                    <label htmlFor="sport" className="text-base">
                      Sport
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value="radio"
                    type="radio"
                    id="technology"
                    name="tags"
                    className="radio"
                    onChange={(e) => setTags(e)}
                  />
                  <label htmlFor="technology" className="text-base">
                    Technology
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value="radio"
                    type="radio"
                    id="food"
                    name="tags"
                    className="radio"
                    onChange={(e) => setTags(e)}
                  />
                  <label htmlFor="food" className="text-base">
                    Food
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value="financial"
                    type="radio"
                    id="financial"
                    name="tags"
                    className="radio"
                    onChange={(e) => setTags(e)}
                  />
                  <label htmlFor="financial" className="text-base">
                    Financial
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default EditPost;
