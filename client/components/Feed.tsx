import { useSession } from "next-auth/react";
import React from "react";
import Posts from "./Posts";

interface feedProps {}

const Feed: React.FC<feedProps> = ({}) => {
  const { data: session } = useSession();
  return (
    <div className="flex-grow h-screen pt-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        <h1 className="text-[#e5e5e5] text-4xl ">
          Welcome to Leba, {session ? session.user?.name : "User"}
        </h1>
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
