// export default async function Page() {
// 	return (
// 		<div className="video-container" style={{ position: 'relative', maxWidth: '200%', maxHeight: '200%', overflow: 'hidden', margin: -20, marginLeft: -100, marginRight: -100 }}>
// 			<video autoPlay loop muted style={{ width: '200%', height: 'auto', position: 'relative', zIndex: 0 }}>
// 				<source src="/bg2.mp4" type="video/mp4" />
// 				Your browser does not support the video tag.
// 			</video>
// 			<div className="banner-home-rt-wrap" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
// 				<div className="banner-home-rt-top">
// 					<h1 className="banner-home-rt-title" style={{ fontWeight: 'bold', color: 'white', maxWidth: '100%', margin: '0 auto', fontSize: '40px' }}>
// 						Welcome to MagicPost
// 					</h1>
// 					<div className="banner-home-rt-text" style={{ color: 'white', maxWidth: '80%', fontSize: '24px', lineHeight: '1.5', textAlign: 'left' }}>
// 						Transforming logistics effortlessly, MagicPost streamlines every step of your transfer, trade, and shipping processes. Manage, track, and expedite with precision.nd make a positive impact on society.
"use client";

import AddressInput from "@/components/AddressInput";
import Title from "@/components/Title/Title";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import MonthlyOrderChart from "./components/Dashboard/MonthlyOrderChart";
import Overview from "./components/Dashboard/Overview";
import PropertiesChart from "./components/Dashboard/PropertiesChart";
import RevenueChart from "./components/Dashboard/RevenueChart";
import TopDeliveriesChart from "./components/Dashboard/TopDeliveriesChart";
import { Address } from "./utils/orders";
import { getStatistics } from "./utils/statistics";

export default function Page() {
	const [point, setPoint] = useState<Address>({
		province: "",
		ward: "",
		district: "",
	});
	const [filterToggle, setFilterToggle] = useState(false);
	const { isLoading, error, data } = useQuery({
		queryKey: ["statistics", filterToggle],
		queryFn: () => getStatistics(point),
	});
	if (isLoading) return <div>Loading...</div>;
	if (error) toast.error(error.message);

	if (data) {
		const statistics = data.statistics;
		return (
			<div className="pt-4">
				<div className="flex flex-col sm:flex-row sm:items-end w-full sm:gap-16 gap-4">
					<Title>Dashboard</Title>
					<div className="w-full sm:w-fit flex flex-row items-end mb-4 ml-auto flex-1">
						<AddressInput
							rowLayoutOnSmallView={true}
							className="text-xs w-full sm:w-64 flex-1"
							includeSpecificAddress={false}
							value={point}
							handleChange={(address) => setPoint({ ...point, ...address })}
						/>
						<button
							type="button"
							className="bg-custom-text-color h-9 w-9 rounded-md text-custom-white ml-2"
							onClick={() => setFilterToggle(!filterToggle)}
						>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					<a href="http://www.vinai.io/product/" target="" className="btn bor" style={{ marginTop: 20 }}>
						<span className="btn-text" style={{ color: 'white' }}>
							See our policies
						</span>
					</a>
				</div>
			</div>
	);
		}
}