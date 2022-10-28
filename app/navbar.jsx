import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <Link href="/">
          <div className="mr-">Home</div>
        </Link>
        <Link href="/posts">posts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
