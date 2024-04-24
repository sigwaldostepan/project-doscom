import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axiosInstance";
import moment from "moment";
import { useLocation } from "react-router-dom";

const CreatePost = () => {
  const lcoation = useLocation();
  const postId = location.pathname.split("/")[2];

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState("");

  const { mutate: createPost } = useMutation({
    mutationFn: async () => {
      return await axiosInstance.post("/posts", {
        title,
        desc,
        tags,
        img,
        date: moment(Date.now().format("YYYY-MM-DD HH:mm:ss")),
      });
    },
  });

  const { mutate: editPost } = useMutation({
    mutationFn: async () => {
      return await axiosInstance.put(`/posts/${postId}`, {
        title,
        desc,
        tags,
        img,
        date: moment(Date.now().format("YYYY-MM-DD HH:mm:ss")),
      });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    return await axiosInstance.post("/posts", {
      title,
      desc,
      tags,
      img,
      date: moment(Date.now().format("YYYY-MM-DD HH:mm:ss")),
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
                  className="input input-bordered"
                />
                <ReactQuill
                  theme="snow"
                  value={desc}
                  onChange={setDesc}
                  className={`h-[300px] text-info rounded-md`}
                />
              </div>
              <form
                className="w-[360px] flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="w-full p-4 flex flex-col gap-4 border border-gray-300">
                  <h2 className="font-bold text-xl">Publish</h2>
                  <label className="flex flex-col gap-2" htmlFor="image">
                    Add image
                    <input
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                      placeholder="Image url"
                      onChange={(e) => setImg(e)}
                    />
                  </label>
                  <Button type={"submit"} message={"Publish"} />
                </div>
                <div className="w-full p-4 flex flex-col gap-4 border border-gray-300">
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
      </main>
    </>
  );
};

export default CreatePost;
