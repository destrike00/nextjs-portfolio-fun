import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
    const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
    const Links = () => {
        return (
            <ul className="hidden md:flex">
                {menuItems.map((item) => {
                    return (
                        <Link href={"/" + item}>
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                {item}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        );
    };
    const VerticalLinks = () => {
        return (
            <ul className="uppercase ">
                {menuItems.map((item) => {
                    return (
                        <Link href={"/" + item}>
                            <li className="py-4 text-sm ">{item}</li>
                        </Link>
                    );
                })}
            </ul>
        );
    };
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image src="" alt="/" />
                <div>
                    <Links />
                    <div className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

                <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                    <div className="fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                        <div className="flex w-full items-center justify-between">
                            <Image src="" width="87" height="35" alt="/" />
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4 ">
                            <p className="w-[80%] md:w-[90%] py-4">
                                Check back every now and then to see what I've
                                been messing around with here
                            </p>
                        </div>
                        <div className="py-4 flex flex-col">
                            <VerticalLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NavBar;
