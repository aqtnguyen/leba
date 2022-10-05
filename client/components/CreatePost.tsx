import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { PhotographIcon, TrashIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useAppDispatch } from "../store/app/hooks";
import { addPost } from "../store/features/postSlice";
import toast from "react-hot-toast";

interface CreatePostProps {
  setOpenModal: (open: boolean) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ setOpenModal }) => {
  const API_ENDPOIT = "http://localhost:8080/api/post";
  const { data: session } = useSession();
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const removeImg = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (session) {
      const formData = new FormData();
      const notification = toast.loading("Creating a new post...");

      formData.append("username", session?.user?.name as string);
      formData.append("userImg", session?.user?.image as string);
      formData.append("file", preview as string);
      formData.append("postText", inputRef.current?.value as string);

      axios
        .post(API_ENDPOIT, formData, {
          headers: { Accept: "application/json" },
        })
        .then((response) => {
          dispatch(addPost(response.data));
          toast.success("New Post added!", {
            id: notification,
          });
          setOpenModal(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please sign in to create a post!");
    }
  };

  return (
    <div className="modalBackground">
      <div className="bg-white rounded-md shadow-md text-gray-500 p-6">
        <div className="flex justify-end">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={`https://avatars.dicebear.com/api/micah/${
              session?.user?.name || "placeholder"
            }.svg`}
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
          />

          <form className="flex flex-1">
            <input
              className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
              type="text"
              ref={inputRef}
              placeholder={`What's on your mind, ${session?.user?.name}?`}
            />
            <button
              className="p-4 flex justify-center items-center  hover:text-green-500"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>

        <div
          className="flex justify-end mt-4 cursor-pointer hover:text-green-500"
          onClick={handleClick}
        >
          <PhotographIcon className="w-6 h-6 " />
          <p className="text-gray-500 hover:text-green-500">Add an image</p>
          <input
            ref={hiddenFileInput}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </div>
        <div className="flex justify-center">
          {preview && (
            <div className="flex items-center gap-4">
              <img src={preview} className="h-[150px] w-[150px] rounded-md" />
              <TrashIcon
                className="h-4 w-4 hover:text-red-500 hover:cursor-pointer"
                onClick={removeImg}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
