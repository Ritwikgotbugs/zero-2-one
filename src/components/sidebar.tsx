import React, { JSX, useEffect } from "react";
import { useRouter } from "next/router";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import { DialogLogoutButton } from "./constants/auth/logoutDialog";
import { GetUser } from "@/utils/helper";
import { PopoverEmail } from "./constants/home/emailPop";
import { RiRobot3Line } from "react-icons/ri";



interface SidebarProps {
    icon?: JSX.Element;
    title?: string;
    goto?: string;
}


export default function Sidebar() {
    const [userEmail, setUserEmail] = React.useState<string | null>(null);
    const router = useRouter();
    const handleNavigation = (goto: string) => {
        if (goto) {
            router.push(goto);
        }
    };
    useEffect(()=> {
        const fetchUser = async () => {
            try {
                const response = await GetUser();
                if (!response) {
                    throw new Error('Failed to fetch user data');
                }
                const data = response;
                setUserEmail(data.email || null);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    });
    const sidebarItems: SidebarProps[] = [
        { icon: <FiHome />, title: "Home", goto: "/" },
        { icon: <FiUser />, title: "Profile", goto: "/profile" },
        { icon: <FiSettings />, title: "Settings", goto: "/settings" },
        { icon: <RiRobot3Line />, title: "Seed.ai", goto: "/chat" },
    ];

    return (
        <div className="h-full justify-between flex flex-col">
            <div id="sidebar">
            {
                sidebarItems.map((item, index) => {
                    const isActive = router.pathname === item.goto;
                    return (
                        <div
                            key={index}
                            className={`flex items-center my-3 py-2 px-5 rounded-lg cursor-pointer hover:bg-zinc-200 ${isActive ? 'bg-zinc-200' : ''}`}
                            onClick={() => handleNavigation(item.goto || '')}
                        >
                            <div className="text-2xl mr-5 text-gray-400">{item.icon}</div>
                            <span className="text-lg">{item.title}</span>
                        </div>
                    );
                })
            }   
            </div>
            <div className="text-2xl p-2 bg-error inline-flex justify-between items-center gap-2">
                <div>
                {/* <span className="text-sm">{userEmail}</span> */}
                <PopoverEmail email={userEmail}/>
                </div>
                <DialogLogoutButton />
            </div>

        </div>
        
    );
}