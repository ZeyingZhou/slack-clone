"use client"
import {Loader, LogOut} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "../api/use-current.user";
import { useAuthActions } from "@convex-dev/auth/react";


export const UserButton = () => {
    const {signOut} = useAuthActions();
    const handleSignOut = async () => {
        // Clear tokens from local storage or cookies (if applicable)
        localStorage.removeItem("convex_auth_token");
        sessionStorage.removeItem("convex_auth_token");
        // Call Convex's sign-out method
        await signOut();
      };
    const {data, isLoading} = useCurrentUser();

    if(isLoading) {
        return <Loader className="size-4 animate-spin text-muted-foreground"></Loader>
    }

    if(!data) {
        return null;
    }

    const { image, name, email } = data;

    const avatarFallback = name!.charAt(0).toUpperCase();


    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image} />
                    <AvatarFallback className="bg-sky-500 text-white">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
                <DropdownMenuItem onClick={() => handleSignOut()} className="h-10">
                    <LogOut className="size-4 mr-2"/>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}