import React from "react";

import { HomeIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
function Sidenav() {
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-secondary text-white shadow-lg">
        <ul>
          <li>
            <a href="#">
              <img
                src="/img/Arcana_logo.png"
                alt=""
                id="logo"
                className="h-10 w-10   sidebar-icon group"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-home group-hover:scale-100">Home</span>
              <HomeIcon className="h-10 w-10   sidebar-icon" title="Home" />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-about group-hover:scale-100">About</span>
              <InformationCircleIcon
                className="h-10 w-10   sidebar-icon"
                title="About"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-plans group-hover:scale-100">Plans</span>
              <BookOpenIcon
                className="h-10 w-10   sidebar-icon"
                title="Plans"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-download group-hover:scale-100">
                Download
              </span>
              <CloudArrowDownIcon
                className="h-10 w-10   sidebar-icon"
                title="Download"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-contactus group-hover:scale-100">
                Contact Us
              </span>
              <ChatBubbleOvalLeftEllipsisIcon
                className="h-10 w-10   sidebar-icon"
                title="Contact Us"
              />
            </a>
          </li>
          <li>
            <a href="#" className="group">
              <span className="tooltip-logout group-hover:scale-100">
                Logout
              </span>
              <UserIcon className="h-10 w-10  sidebar-icon" title="Logout" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-secondary fixed h-screen w-screen" id="profile">
        <UserCircleIcon className="fixed" id="circle" />
        <div className="fixed flex" id="avatar">
          <button
            className="bg-primary px-2 rounded-xl text-lg text-secondary font-bold"
            id="change-avatar"
          >
            Change Avatar
          </button>
        </div>
        <div className="fixed" id="edit-user">
          <form action="">
            <div>
              <label
                htmlFor="firstName"
                className=" px-2 text-lg text-primary font-bold mb-4"
              >
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="rounded-md mb-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className=" px-2 text-lg text-primary font-bold mb-4"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="rounded-md mb-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className=" px-2 text-lg text-primary font-bold mb-4"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-md mb-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className=" px-2 text-lg text-primary font-bold mb-4"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="rounded-md mb-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary px-2 rounded-xl text-lg text-secondary font-bold"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div id="user-info" className="fixed">
          <div className="text-primary text-4xl pb-2">User Information</div>
          <div className="text-primary text-2xl">
            First Name: <span id="user-fname">Juan</span>
          </div>
          <div className="text-primary text-2xl">
            Last Name: <span id="user-lname">Luna</span>
          </div>
          <div className="text-primary text-2xl">
            Email: <span id="user-email">juanluna@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <PencilIcon className="h-7 w-7 text-white" /> */
}
export default Sidenav;
