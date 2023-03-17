import React from "react";

import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Sidenav() {
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col hidden md:block bg-secondary text-white shadow-lg">
        <ul>
          <li>
            <a href="#">
              <img
                src="/img/Arcana_logo.png"
                alt=""
                id="logo"
                className="h-12 w-12 my-8 sidebar-icon group"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-home group-hover:scale-100">Home</span>
              <HomeIcon className="h-8 w-8 my-16   sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-user-profile group-hover:scale-100">
                User Profile
              </span>
              <UserCircleIcon className="h-8 w-8 my-16  sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-about group-hover:scale-100">About</span>
              <InformationCircleIcon className="h-8 w-8 my-16   sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-plans group-hover:scale-100">Plans</span>
              <BookOpenIcon className="h-8 w-8 my-16   sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-download group-hover:scale-100">
                Download
              </span>
              <CloudArrowDownIcon className="h-8 w-8 my-16   sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-contactus group-hover:scale-100">
                Contact Us
              </span>
              <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 my-16   sidebar-icon" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-logout group-hover:scale-100">
                Logout
              </span>
              <UserIcon className="h-8 w-8 my-16  sidebar-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
{
  /* <PencilIcon className="h-7 w-7 text-white" /> */
}
export default Sidenav;
