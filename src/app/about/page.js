import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Us",
};

function About() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <ul>
          <li className="mb-2">
            <Link href="/about/Mission" className="hover:text-gray-300">
              📌 Mission
            </Link>
          </li>
          <li>
            <Link href="/about/Vision" className="hover:text-gray-300">
              🌟 Vision
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to About Us Page</h1>
        <p className="text-gray-700 mt-4">
          Explore our Mission and Vision using the sidebar.
        </p>
      </main>
    </div>
  );
}

export default About;
