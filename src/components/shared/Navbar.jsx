"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session , isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user,"user");
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

      {isPending ? <span className="loading loading-spinner loading-lg"></span> : user ? <div className="flex items-center gap-2">
        
        <Image src={user.image || userAvatar} alt="user avatar" width={40} height={40} />
        <h2>{user.name}</h2>
        <button className="btn bg-[#403F3F] text-white" onClick={async()=>await authClient.signOut()}>LogOut</button>  
      </div>: <button className="btn bg-[#403F3F] text-white ">
          <Link href={"/login"}>Login</Link>
        </button>}
    </div>
  );
};

export default Navbar;
