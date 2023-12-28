"use client";

// <<<<<<< HEAD
// export default async function Page() {
// 	return (


{/* <div className="video-container" style={{ position: 'relative', maxWidth: '200%', maxHeight: '200%', overflow: 'hidden', margin: -20, marginLeft: -100, marginRight: -100 }}>
    <video autoPlay loop muted style={{ width: '200%', height: 'auto', position: 'relative', zIndex: 0 }}>
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div className="banner-home-rt-wrap" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <div className="banner-home-rt-top">
            <h1 className="banner-home-rt-title" style={{ fontWeight: 'bold', color: 'white', maxWidth: '100%', margin: '0 auto', fontSize: '40px' }}>
                Welcome to MagicPost
            </h1>
            <div className="banner-home-rt-text" style={{ color: 'white', maxWidth: '80%', fontSize: '24px', lineHeight: '1.5',  textAlign: 'left' }}>
            Transforming logistics effortlessly, MagicPost streamlines every step of your transfer, trade, and shipping processes. Manage, track, and expedite with precision.nd make a positive impact on society.
            </div>
            <a href="http://www.vinai.io/product/" target="" className="btn bor" style={{marginTop: 20}}>
                <span className="btn-text" style={{ color: 'white' }}>
                    See our policies
                </span>
            </a>
        </div>
    </div> */}




//     {/* <div className="banner-home-list d-wrap">
//                     <div className="banner-home-rt d-item d-2">
//                         <div className="swiper mySwiperHome">
//                             <div className="swiper-wrapper">
//                                                                     <div className="swiper-slide d-item">
//                                         <div className="banner-home-rt-wrap">
//                                             <div className="banner-home-rt-top">
//                                                                                                     <h1 className="banner-home-rt-title">
//                                                         Welcome to VinAI                                                    </h1>
//                                                                                                 <div className="banner-home-rt-text">
//                                                     Driven by an unwavering pursuit of excellence and an unwavering commitment to customer satisfaction, VinAI is positioned to revolutionize industries and make a positive impact on society.                                                </div>
//                                                                                                     <a href="http://www.vinai.io/product/" target="" className="btn bor">
//                                                         <span className="btn-text">
//                                                             See our products                                                        </span>
//                                                     </a>
//                                                                                             </div>
//                                         </div>
//                                     </div>
//                                                                     <div className="swiper-slide d-item">
//                                         <div className="banner-home-rt-wrap">
//                                             <div className="banner-home-rt-top">
//                                                                                                     <div className="banner-home-rt-title">
//                                                         Driver and Occupants Monitoring System                                                    </div>
//                                                                                                 <div className="banner-home-rt-text">
//                                                     In-cabin solutions that make driving safer and more comfortable. Upgrade your vehicles to the next level of safety and comfort with our AI-powered features.                                                </div>
//                                                                                                     <a href="http://www.vinai.io/product/smart-mobility/driver-and-occupants-monitoring-system/" target="" className="btn bor">
//                                                         <span className="btn-text">
//                                                             See our products                                                        </span>
//                                                     </a>
//                                                                                             </div>
//                                         </div>
//                                     </div>
//                                                                     <div className="swiper-slide d-item">
//                                         <div className="banner-home-rt-wrap">
//                                             <div className="banner-home-rt-top">
//                                                                                                     <div className="banner-home-rt-title">
//                                                         Advanced Surround View Monitoring System                                                    </div>
//                                                                                                 <div className="banner-home-rt-text">
//                                                     Around-the-vehicle solutions that make driving safer and more comfortable. Upgrade your vehicles to the next level of safety and comfort with our AI-powered features.                                                </div>
//                                                                                                     <a href="http://www.vinai.io/product/smart-mobility/advanced-surround-view-monitoring-system/" target="" className="btn bor">
//                                                         <span className="btn-text">
//                                                             See our products                                                        </span>
//                                                     </a>
//                                                                                             </div>
//                                         </div>
//                                     </div>
//                                                                     <div className="swiper-slide d-item">
//                                         <div className="banner-home-rt-wrap">
//                                             <div className="banner-home-rt-top">
//                                                                                                     <div className="banner-home-rt-title">
//                                                         GuardPro                                                    </div>
//                                                                                                 <div className="banner-home-rt-text">
//                                                     AI solution that revolutionizes ordinary IP cameras into a comprehensive AI system with enhanced security, compliance, safety, and convenience.                                                </div>
//                                                                                                     <a href="http://www.vinai.io/product/smart-edge/guardpro/" target="" className="btn bor">
//                                                         <span className="btn-text">
//                                                             See our products                                                        </span>
//                                                     </a>
//                                                                                             </div>
//                                         </div>
//                                     </div>
//                                                                     <div className="swiper-slide d-item">
//                                         <div className="banner-home-rt-wrap">
//                                             <div className="banner-home-rt-top">
//                                                                                                     <div className="banner-home-rt-title">
//                                                         World-ClassName Research                                                    </div>
//                                                                                                 <div className="banner-home-rt-text">
//                                                     VinAI is a global top 20 AI research-based company with a myriad of practical research projects.                                                </div>
//                                                                                                     <a href="http://news.vinai.io/" target="" className="btn bor">
//                                                         <span className="btn-text">
//                                                             Learn more                                                        </span>
//                                                     </a>
//                                                                                             </div>
//                                         </div>
//                                     </div>
//                                                             </div>
//                         </div>
//                     </div>
//                 </div> */}
// </div>



// 	);
// =======
import Title from "@/components/Title/Title";
import Overview from "./components/Dashboard/Overview";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "./utils/statistics";
import { toast } from "react-toastify";
import MonthlyOrderChart from "./components/Dashboard/MonthlyOrderChart";
import RevenueChart from "./components/Dashboard/RevenueChart";
import TopDeliveriesChart from "./components/Dashboard/TopDeliveriesChart";
import PropertiesChart from "./components/Dashboard/PropertiesChart";
import { Address } from "./utils/orders";
import AddressInput from "@/components/AddressInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
            <div>
                <div className="video-container" style={{ position: 'absolute',  maxWidth: '200%', maxHeight: '200%', overflow: 'hidden', margin: -75, marginLeft: 0, marginRight: 0, width: '100vw'}}>
                    <video autoPlay loop muted style={{ width: '200%', height: 'auto', position: 'relative', zIndex: 0 }}>
                        <source src="/bg2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className="banner-home-rt-wrap" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                        <div className="banner-home-rt-top">
                            <h1 className="banner-home-rt-title" style={{ fontWeight: 'bold', color: 'white', maxWidth: '100%', margin: '0 auto', fontSize: '40px' }}>
                                Welcome to MagicPost
                            </h1>
                            <div className="banner-home-rt-text" style={{ color: 'white', maxWidth: '80%', fontSize: '24px', lineHeight: '1.5',  textAlign: 'left' }}>
                            Transforming logistics effortlessly, MagicPost streamlines every step of your transfer, trade, and shipping processes. Manage, track, and expedite with precision.nd make a positive impact on society.
                            </div>
                            <a href="http://www.vinai.io/product/" target="" className="btn bor" style={{marginTop: 20}}>
                                <span className="btn-text" style={{ color: 'white' }}>
                                    See our policies
                                </span>
                            </a>
                        </div>
                    </div>  */}
                                </div>        

			<div className="pt-4">
				<div className=" flex flex-col sm:flex-row sm:items-end w-full">
					<Title>Dashboard</Title>
					<div className="w-full sm:w-fit flex flex-row items-end mb-4 ml-auto">
						<AddressInput
							rowLayoutOnSmallView={true}
							className="text-xs w-full sm:w-64"
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
				</div>
				<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<Overview {...statistics.overview} />
					<MonthlyOrderChart data={statistics.orders} />
					<RevenueChart {...statistics.revenue} />
					<TopDeliveriesChart data={statistics.topDeliveries} />
					<PropertiesChart data={statistics.properties} />
				</div>
			</div>
            </div>        

		);
	}
}
