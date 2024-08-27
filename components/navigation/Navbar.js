"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full h-20 bg-emerald-800 sticky top-0">
        <nav className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <p>LOGO</p>
            </Link>
            <div className="flex md:hidden text-white" onClick={toggle}>
              HAMBURGER
            </div>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about-us">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isOpen && <Sidebar toggle={toggle} />}
    </>
  );
}
