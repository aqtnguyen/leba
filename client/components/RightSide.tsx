import React from "react";
import Image from "next/image";

const RightSide: React.FC = () => {
  return (
    <div className="hidden md:inline-flex flex-col max-w-xl md:min-w-[200px] lg:min-w-[250px] justify-center p-4">
      <p className="text-[#e5e5e5] mb-6">Suggestions for you</p>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/anhtuan.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Anh Tuan</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/nguyen.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Anh Tuan</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/tu.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Nguyen</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/duc.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Nguyen</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/bengi.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Nguyen</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Image
          src={`https://avatars.dicebear.com/api/micah/pham.svg`}
          height={40}
          width={40}
          className="rounded-full cursor-pointer bg-slate-300"
        />
        <p className="text-[#e5e5e5]">Nguyen</p>
        <button className="cursor-pointer rounded-lg p-2 text-gray-500 bg-blue-100">
          Follow
        </button>
      </div>

      <div className="flex text-[#e5e5e5] cursor-pointer mt-4 justify-between">
        <p>About</p>
        <p>Github</p>
      </div>
    </div>
  );
};

export default RightSide;
