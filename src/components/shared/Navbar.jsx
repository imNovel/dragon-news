
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="container mx-auto flex justify-between mt-6">
      <div></div>

      <ul className="flex justify-between items-center text-gray-600 gap-2">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        {isPending ? null : user ? (
          <>
            <li>
              <Image
                src={user.image || userAvatar}
                alt={user.name || "user avatar"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </li>
            <li>
              <button onClick={handleSignOut} className="btn bg-[#403F3F] text-white">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="btn bg-[#403F3F] text-white" href={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="btn bg-[#403F3F] text-white" href={"/register"}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;