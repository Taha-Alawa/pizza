"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
// images
import logo from "../public/assets/images/logo.png";
import search from "../public/assets/images/search.png";
import house from "../public/assets/images/home.png";
import cart from "../public/assets/images/cart.png";

const NavLink = ({ href, children }: any) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`font-bold hover:text-[#FB4A36] duration-150 ${
        isActive ? styles.active : ""
      }`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [ref, setRef] = useState<boolean>(false);

  const showNavBar = () => {
    setRef((prev) => !prev)
  }
  

  return (
    <header className="flex items-center justify-between w-4/5 mx-auto mt-4 relative">
      <Image src={logo} alt="logo" width={100} height={100} />
      <nav className="w-3/5 hidden md:block">
        <ul className="flex p-0 items-center w-full justify-around">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/menu">Our menu</NavLink>
          </li>
          <li>
            <NavLink href="/about">About us</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hidden md:items-center w-1/4 md:flex md:justify-evenly">
        <Image
          src={search}
          alt="search"
          width={26}
          height={26}
          className="cursor-pointer"
        />
        <Image
          src={cart}
          alt="cart"
          width={26}
          height={26}
          className="cursor-pointer"
        />
        <Image
          src={house}
          alt="house"
          width={26}
          height={26}
          className="cursor-pointer"
        />
      </div>
      <button className="block md:hidden text-3xl" onClick={showNavBar}>&#9776;</button>
      {/* mobile nav */}
      <nav className={`${ref ? 'translate-x-0' : 'translate-x-full'} duration-500 w-3/4 block fixed z-10 top-0 right-0 bottom-0 bg-white/70 backdrop-blur-sm border-l-2 border-[#FB4A36] md:hidden`}>
        <button className="text-6xl absolute top-8 right-[12%]" onClick={showNavBar}>
          &times;
        </button>
        <ul className="flex h-2/4 mt-14 flex-col p-0 items-center w-full justify-around">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/menu">Our menu</NavLink>
          </li>
          <li>
            <NavLink href="/about">About us</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact us</NavLink>
          </li>
          <li className="flex items-center w-4/5 justify-evenly">
            <Image
              src={search}
              alt="search"
              width={26}
              height={26}
              className="cursor-pointer"
            />
            <Image
              src={cart}
              alt="cart"
              width={26}
              height={26}
              className="cursor-pointer"
            />
            <Image
              src={house}
              alt="house"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
