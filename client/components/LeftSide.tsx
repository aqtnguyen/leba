import React, { useState } from "react";
import {
  HomeIcon,
  PlusCircleIcon,
  InboxInIcon,
  BellIcon,
  LockOpenIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import CreatePost from "./CreatePost";

interface leftsideProps {}

const LeftSide: React.FC<leftsideProps> = ({}) => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="hidden lg:inline-flex flex-col p-20 max-w-xl gap-10 lg:min-w-[320px]">
      {modalOpen && <CreatePost setOpenModal={setModalOpen} />}
      <p className="text-6xl text-[#e5e5e5]">Leba</p>
      <div className="flex items-center space-x-4">
        <HomeIcon className="navbarLink" />
        <p className="navbarFont">Home</p>
      </div>
      <div
        className="flex items-center space-x-4"
        onClick={() => setModalOpen(true)}
      >
        <PlusCircleIcon className="navbarLink" />
        <p className="navbarFont">New Post</p>
      </div>
      <div className="flex items-center space-x-4">
        <InboxInIcon className="navbarLink" />
        <p className="navbarFont">Messages</p>
      </div>
      <div className="flex items-center space-x-4">
        <BellIcon className="navbarLink" />
        <p className="navbarFont">Notifications</p>
      </div>
      {session ? (
        <div className="flex items-center space-x-4" onClick={() => signOut()}>
          <LockClosedIcon className="navbarLink" />
          <p className="navbarFont">Sign Out</p>
        </div>
      ) : (
        <div className="flex items-center space-x-4" onClick={() => signIn()}>
          <LockOpenIcon className="navbarLink" />
          <p className="navbarFont">Sign In</p>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
