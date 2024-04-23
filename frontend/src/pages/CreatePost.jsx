import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../components/Button";

const CreatePost = () => {
  const [tags, setTags] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(tags);
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
                  placeholder="Type here"
                  className="input input-bordered"
                />
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  className={`h-[300px] text-info rounded-md`}
                />
              </div>
              <form
                className="w-[360px] flex flex-col gap-4"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="w-full p-4 flex flex-col gap-4 border border-gray-300">
                  <h2>Publish</h2>
                  <label
                    className="underline underline-offset-2 cursor-pointer"
                    htmlFor="image"
                  >
                    Upload image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="tags"
                    className="hidden"
                  />
                  <Button type={"submit"} message={"Update"} />
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
                      id="foods"
                      name="tags"
                      className="radio"
                    />
                    <label htmlFor="foods" className="text-base">
                      Foods
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      value="radio"
                      type="radio"
                      id="movies"
                      name="tags"
                      className="radio"
                    />
                    <label htmlFor="movies" className="text-base">
                      Movies
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      value="technology"
                      type="radio"
                      id="technology"
                      name="tags"
                      className="radio"
                    />
                    <label htmlFor="technology" className="text-base">
                      Technology
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
