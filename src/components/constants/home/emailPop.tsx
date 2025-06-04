import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface PopoverEmailProps {
    email?: string | null;
}

export function PopoverEmail({email}: PopoverEmailProps) {
  const router = useRouter();
  const handleNavigation = (goto: string) => {
        if (goto) {
            router.push(goto);
        }
    };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" className="bg-zinc-800"><FiUser className="text-2xl cursor-pointer text-white rounded-2xl"/></Button>
      </PopoverTrigger>
      <PopoverContent className="bg-[#303030] border-0 rounded-2xl mb-2 ml-7 shadow-lg w-72">
        <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-400">Email</Label>
                <span className="text-white">{email}</span>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
