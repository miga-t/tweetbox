import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { SidebarLogo } from "@/components/layout/SidebarLogo";
import { SidebarItem } from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
export const Sidebar = () => {
	const { data: currentUser, error } = useCurrentUser();

	const items = [
		{
			label: "Home",
			href: "/",
			icon: BsHouseFill
		},
		{
			label: "Notifications",
			href: "/notifications",
			icon: BsBellFill,
			auth: true,
			alert: currentUser?.hasNotification
		},
		{
			label: "Profile",
			href: `/users/${currentUser?.id}`,
			icon: FaUser,
			auth: true
		}
	];

	return (
		<div className="col-span-1 h-full sm:pr-4 md:pr-6">
			<div className="flex flex-col items-end ">
				<div className="lg:w-[230px] space-y-2">
					<SidebarLogo />
					{items.map((item) => (
						<SidebarItem
							key={item.href}
							href={item.href}
							label={item.label}
							icon={item.icon}
							auth={item.auth}
							alert={item.alert}
						/>
					))}

					{currentUser && (
						<SidebarItem
							onClick={() => signOut()}
							icon={BiLogOut}
							label="Logout"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
