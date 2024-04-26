import { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useCreatePost from "../features/posts/useCreatePost";
import { AuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import isDataEmpty from "../lib/isDataEmpty";
import NotifyToast from "../components/NotifyToast";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [tags, setTags] = useState("");

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const { mutate: createPost } = useCreatePost();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title?.target?.value,
      desc,
      img: img?.target?.value,
      tags: tags?.target?.name,
      date: moment(Date.now()).toISOString(),
      username: currentUser.username,
    };

    const hasNull = isDataEmpty(data);

    // check if data field empty return error, check if user not logged in return error
    if (hasNull) return toast.error("Please fill all field!");
    if (!currentUser) return toast.error("Login first!");

    createPost(data, {
      onSuccess: () => {
        toast.success("Post created!");

        return setTimeout(() => {
          navigate("/");
        }, 1500);
      },
    });
  };

  return (
    <>
      <main>
        <div className="h-screen flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[940px] flex gap-6">
              <div className="w-full max-w-[720px] flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e)}
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
                      className="input input-bordered w-full max-w-xs border-gray-300"
                      placeholder="Image url"
                      onChange={(e) => setImg(e)}
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
        <NotifyToast />
      </main>
    </>
  );
};

export default CreatePost;
