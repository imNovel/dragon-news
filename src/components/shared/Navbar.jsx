import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between mt-6">
        <div></div>
      <ul className="flex justify-between items-center text-gray-600 gap-2">
        <li>
          {" "}
          <NavLink href={"/"}>Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink href={"/about-us"}>About</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink href={"/career"}>Career</NavLink>{" "}
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image src={userAvatar} alt="user avatar" width={40} height={40} />
        <button className="btn bg-[#403F3F] text-white ">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
