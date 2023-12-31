"use client";

import SummaryTable from "@/components/SummaryTable";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import { Moment } from "moment";
import { useState } from "react";
import { toast } from "react-toastify";
import OrderFilter from "./OrderFilter";

async function filterOrders(
	pageNumber: number,
	statusFilter?: string,
	categoryFilter?: string,
	startDate?: Date,
	endDate?: Date
) {
	const filter: { [key: string]: string } = {
		pageNumber: pageNumber.toString(),
	};
	if (statusFilter) filter[`status`] = statusFilter;
	if (categoryFilter) filter[`category`] = categoryFilter;
	if (startDate) filter[`startDate`] = startDate.toISOString();
	if (endDate) filter[`endDate`] = endDate.toISOString();
	return fetch(
		`${process.env.NEXT_PUBLIC_ORDER_ENDPOINT}/filter?` +
			new URLSearchParams(filter),
		{ credentials: "include" }
	).then(async (res) => {
		if (res.status !== 200) {
			const json = await res.json();
			throw new Error(json.message);
		}
		return res.json();
	});
}

const columnHeadings = [
	{
		label: "Tạo Vào Lúc",
		value: "createdAt",
	},
	{
		label: "Người Gửi",
		value: "sender.name",
	},
	{
		label: "Từ",
		value: "sender.address.name",
	},
	{
		label: "Người Nhận",
		value: "receiver.name",
	},
	{
		label: "Tới",
		value: "receiver.address.name",
	},
	{
		label: "Loại Hàng",
		value: "packageInfo.type",
	},
	{
		label: "Tình Trạng",
		value: "status",
	},
];

export default function OrdersSummaryTable() {
	const [pageNumber, setPageNumber] = useState(1);
	const [statusFilter, setStatusFilter] = useState("");
	const [timeRange, setTimeRange] = useState<Array<Moment | null>>([
		null,
		null,
	]);
	const [categoryFilter, setCategoryFilter] = useState("");
	const [filterToggle, setFilterToggle] = useState(false);

	const { isPending, error, data } = useQuery({
		queryKey: ["orders", filterToggle, pageNumber],
		queryFn: () =>
			filterOrders(
				pageNumber,
				statusFilter,
				categoryFilter,
				timeRange[0]?.toDate(),
				timeRange[1]?.toDate()
			),
	});

	if (isPending) return <Skeleton active />;

	if (error) toast.error(error.message);

	return (
		<div className="flex flex-col items-center gap-4">
			<SummaryTable
				items={data.data.data}
				columnHeadings={columnHeadings}
				pageNumber={pageNumber}
				totalPage={data.data.totalPage}
				setPageNumber={setPageNumber}
			>
				<OrderFilter
					{...{
						statusFilter,
						setStatusFilter,
						timeRange,
						setTimeRange,
						categoryFilter,
						setCategoryFilter,
						handleConfirm: () => setFilterToggle(!filterToggle),
					}}
				/>
			</SummaryTable>
		</div>
	);
}
