import React, {ReactNode} from "react";
import Sidebar from "./sidebar";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div id="main" className="{`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]` bg-white h-screen flex flex-col text-black p-5 ">
            <div id="header" className="flex justify-between">
                <div id="logo" className=" w-1/6 py-5 text-3xl bg-[#F5F5F590] rounded-xl border-2 border-zinc-200 m-2 px-5 justify-items-start">SeedUp</div>
                <div id="search/icon" className="w-5/6 bg-[#F5F5F590] rounded-xl border-2 border-zinc-200 m-2 px-10 justify-items-start py-5 text-3xl"></div>
            </div>
            <div id="content" className="flex flex-grow">
                <div id="sidebar" className="w-1/6 p-2 bg-[#F5F5F590] rounded-xl border-2 border-zinc-200 m-2 justify-items-start"><Sidebar/></div>
                <div id="data" className="w-5/6 bg-[#F5F5F590] rounded-xl border-2 border-zinc-200 m-2 justify-items-start">
                    <main className="h-full w-full rounded-xl">{children}</main>
                </div>
            </div>
        </div>  
    );
}