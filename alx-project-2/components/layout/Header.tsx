import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">ALX Project 2</h1>
      <nav className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">Home Page</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
