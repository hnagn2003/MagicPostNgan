"use client";
import { faBell, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Avatar from "./Avatar";
import Toggle from "./Toggle";
import './headerStyles.css';
import SubMenu from "../Nav/SubMenu";
import MenuItem from "../Nav/MenuItem";
import {
	faFolderPlus,
	faListCheck,
	faArrowRightFromBracket,
	faArrowRightToBracket,
	faUserGroup,
	faBuilding,
	IconDefinition,
	faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
export default function Header({ onToggle }: { onToggle: () => void }) {
	const router = useRouter();
	const handleLogout = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/logout`, {
			credentials: "include",
			method: "POST",
		});
		const response = await res.json();
		if (res.status === 200) {
			toast.success(response.message);
			router.replace("/login");
		} else {
			toast.error(response.message);
		}
	};
	const getMenuItemProps = (
		label: string,
		path: string,
		icon: IconDefinition | null = null
	): { label: string; path: string; icon: IconDefinition | null } => {
		return { label, path, icon };
	};
	const orderItems = [

		getMenuItemProps("Create", "/staff/orders/create", faFolderPlus),
		getMenuItemProps("Status", "/staff/orders/status", faListCheck),
	].map((props) => <MenuItem {...props} key={props.path} />);
	const deliveryItems = [
		getMenuItemProps(
			"Incoming",
			"/staff/deliveries/incoming",
			faArrowRightToBracket
		),
		getMenuItemProps(
			"Outgoing",
			"/staff/deliveries/outgoing",
			faArrowRightFromBracket
		),
		getMenuItemProps("History", "/staff/deliveries/history", faClockRotateLeft),
	].map((props) => <MenuItem {...props} key={props.path} />);
	const managementItems = [
		getMenuItemProps("Staffs", "/staff/management/staffs", faUserGroup),
		getMenuItemProps("Points", "/staff/management/points", faBuilding),
	].map((props) => <MenuItem {...props} key={props.path} />);

	return (
		<header className="p-4 h-16 pr-6 md:gap-6 gap-4 flex flex-row items-center justify-between z-[30] fixed w-full custom-header">
			{/* <Toggle onToggle={onToggle} /> */}
			<picture>
				<source media="(max-width: 500px)" srcSet="/logo_sqrt_notext_crop.png" />
				<Image
					src="/logo_sqrt_notext_crop.png"
					alt=""
					width="0"
					height="0"
					className="md:w-28 w-28 h-auto"
				/>
			</picture>
			{/* <div className="h-5 w-5">
				<ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
					<MenuItem label="Dashboard" path="/staff" />
				</ul>
				<ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
					<li>
					<SubMenu label="Orders">{orderItems}</SubMenu>
					</li>
				</ul>
				<ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
					<SubMenu label="Deliveries">{deliveryItems}</SubMenu>
				</ul>
				<ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
					<SubMenu label="Management">{managementItems}</SubMenu>
				</ul>
			</div> */}
			<ul className="menu xl:menu-horizontal  lg:min-w-max bg-base-200 rounded-box h-16">
					<MenuItem label="Dashboard" path="/staff" />

					<SubMenu label="Orders">{orderItems}</SubMenu>

					<SubMenu label="Deliveries">{deliveryItems}</SubMenu>

					<SubMenu label="Management">{managementItems}</SubMenu>

			</ul>
			<div className="flex justify-center items-center">

				<div className="search-bar mr-4 relative">
					<input
						type="text"
						placeholder="Take a look..."
						className="search-input rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500 mx-auto custom-search-input" />
				</div>
			</div>
			<FontAwesomeIcon icon={faBell} className=" ml-auto h-4" />
			<Avatar src="/default_avatar.png" />
			<button onClick={handleLogout}>
				<FontAwesomeIcon icon={faDoorOpen} className="h-4" />
			</button>
		</header>
	);
}
