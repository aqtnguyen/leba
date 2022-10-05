import React from "react";
import Image from "next/image";
import { ChatAltIcon, HeartIcon } from "@heroicons/react/outline";
import { Post } from "../interfaces/Post";

interface postProps {
  post: Post;
}

const Post: React.FC<postProps> = ({ post }) => {
  return (
    <div className="flex flex-col bg-white mt-6 p-4 rounded-md" key={post.id}>
      <div>
        <div className="flex items-center space-x-2">
          <Image
            src={post.userImg}
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            priority
          />
          <div>
            <p className="font-edium">{post.username}</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.postText}</p>
      </div>
      <div className="relative h-40 md:h-60 bg-white">
        <Image
          src={`https://avatars.dicebear.com/api/micah/${
            post.id || "placeholder"
          }.svg`}
          objectFit="cover"
          layout="fill"
          priority
        ></Image>
      </div>

      <div className="flex items-center gap-4 justify-end bg-white p-2">
        <HeartIcon className="w-6 h-6" />
        <ChatAltIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Post;
