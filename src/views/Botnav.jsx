import React from "react";

import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Botnav() {
  return (
    <div>
      <nav>
        <div className="fixed bottom-0 left-0 h-12 w-screen sm:block md:hidden bg-secondary text-white shadow-lg">
          <ul className="flex flex-row">
            <li>
              <a href="#" className="group botbar-icon">
                <img
                  src="/img/Arcana_logo.png"
                  alt=""
                  id="logo"
                  className="h-10 w-10 botbar-icon relative bottom-1.5"
                />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-home group-hover:scale-100">
                  Home
                </span>
                <HomeIcon className="h-10 w-10   botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-user-profile group-hover:scale-100">
                  User Profile
                </span>
                <UserCircleIcon className="h-10 w-10  botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-about group-hover:scale-100">
                  About
                </span>
                <InformationCircleIcon className="h-10 w-10   botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-plans group-hover:scale-100">
                  Plans
                </span>
                <BookOpenIcon className="h-10 w-10   botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-download group-hover:scale-100">
                  Download
                </span>
                <CloudArrowDownIcon className="h-10 w-10   botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-contactus group-hover:scale-100">
                  Contact Us
                </span>
                <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10   botbar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <span className="tooltip-bot-logout group-hover:scale-100">
                  Logout
                </span>
                <UserIcon className="h-10 w-10  botbar-icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
{
  /* <PencilIcon className="h-7 w-7 text-white" /> */
}
export default Botnav;
