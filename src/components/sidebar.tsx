import React, { JSX } from "react";
import { useRouter } from "next/router";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";


interface SidebarProps {
    icon?: JSX.Element;
    title?: string;
    goto?: string;
}


export default function Sidebar() {
    const router = useRouter();
    const handleNavigation = (goto: string) => {
        if (goto) {
            router.push(goto);
        }
    };
    const sidebarItems: SidebarProps[] = [
        { icon: <FiHome />, title: "Home", goto: "/" },
        { icon: <FiUser />, title: "Profile", goto: "/profile" },
        { icon: <FiSettings />, title: "Settings", goto: "/settings" },
    ];

    return (
        <div id="sidebar">
        {
            sidebarItems.map((item, index) => {
                const isActive = router.pathname === item.goto;
                return (
                    <div
                        key={index}
                        className={`flex items-center m-2 my-3 py-3 px-5 rounded-lg cursor-pointer hover:bg-zinc-200 ${isActive ? 'bg-zinc-200' : ''}`}
                        onClick={() => handleNavigation(item.goto || '')}
                    >
                        <div className="text-2xl mr-5 text-gray-400">{item.icon}</div>
                        <span className="text-xl">{item.title}</span>
                    </div>
                );
            })
        }   
        </div>
    );
}