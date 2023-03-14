import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
function Home() {
  return (
    <section className="flex gap-6 bg-[black]">
      <div
        className={`bg-[#F59E0B] min-h-screen ${
          open ? "w-30" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3">
          <a href="#">
            <img
              src="/img/Arcana_logo.png"
              alt=""
              id="logo"
              className="flex justify-center"
            />
          </a>
        </div>
        <div className="text-black">
          <a href="#">
            <HomeIcon className="h-10 w-10 text-black " />
          </a>
        </div>
        <div className="text-black">
          <a href="#">
            <InformationCircleIcon className="h-10 w-10 text-black " />
          </a>
        </div>
        <div className="text-black">
          <a href="#" className="text-2xl">
            <BookOpenIcon className="h-10 w-10 text-black " />
          </a>
        </div>
        <div className="text-black">
          <a href="#" className="text-2xl">
            <CloudArrowDownIcon className="h-10 w-10 text-black " />
          </a>
        </div>
        <div className="text-black">
          <a href="#" className="text-2xl">
            <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-black " />
          </a>
        </div>
        <div className="text-black">
          <a href="#" className="text-2xl">
            <UserIcon className="h-10 w-10 text-black " />
          </a>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="circle">
            <UserCircleIcon className="relative top-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
