import React from "react";
import Image from "next/image";
import {
  BellIcon,
  HomeIcon,
  InboxInIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
  const { data: session } = useSession();
  return (
    <div className="sticky z-50 flex h-16 bg-white items-center p-2 shadow-md bottom-0 lg:hidden">
      <div className="flex min-w-fit">
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <SearchIcon className="h-6 w-6" />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink"
            type="text"
            placeholder="Helli"
          />
        </div>
      </div>

      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center  h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <HomeIcon className="mx-auto text-blue-500 h-10 w-10" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <PlusCircleIcon className="mx-auto text-gray-500 h-10 w-10" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <InboxInIcon className="mx-auto text-gray-500 h-10 w-10" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <BellIcon className="mx-auto text-gray-500 h-10 w-10" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 justify-end min-w-fit">
        {session ? (
          <div className="flex gap-6 items-center">
            <p className="hidden xl:inline-flex text-2xl">
              Hello {session.user?.name}
            </p>
            <div className="relative h-10 w-10 bg-white">
              <Image
                layout="fill"
                src={
                  session?.user?.image ||
                  "https://avatars.dicebear.com/api/micah/test.svg"
                }
                className="rounded-full"
              />
            </div>
          </div>
        ) : (
          <p>Hello User</p>
        )}
      </div>
    </div>
  );
};

export default Header;
