import { Address } from "./orders";

const fakeWeeklyOrderStats = (() => {
	const res = [];
	for (let i = 1; i < 32; i += 1) {
		const fakeData = {
			day: i,
			incoming: Math.floor(Math.random() * 200),
			outgoing: Math.floor(Math.random() * 200),
			pending: Math.floor(Math.random() * 200),
		};
		res.push(fakeData);
	}
	return res;
})();

const fakeOverview = {
	incoming: 121,
	outgoing: 324,
	pending: 326,
	revenue: 100000,
	profit: 20223,
};

const fakeRevenue = {
	cod: 40000,
	profit: 20223,
	delivery: 39777,
};

const fakeTopDeliveries = [
	{
		point: "Hanoi",
		incoming: 611,
		outgoing: 90,
	},
	{
		point: "TP HCM",
		incoming: 783,
		outgoing: 212,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
	{
		point: "Thai Binh",
		incoming: 423,
		outgoing: 231,
	},
];

const fakeProperties = [
	{
		property: "High value",
		value: 123,
	},
	{
		property: "Fragile",
		value: 192,
	},
	{
		property: "Bulk",
		value: 112,
	},
	{
		property: "Out of Gauge",
		value: 210,
	},
	{
		property: "Liquid",
		value: 123,
	},
	{
		property: "Magnetic",
		value: 123,
	},
	{
		property: "Thermal Sensitive",
		value: 323,
	},
	{
		property: "Standard",
		value: 192,
	},
];

function getRandomArray(length: number): number[] {
	const randomArray: number[] = [];
	for (let i = 0; i < length; i++) {
		randomArray.push(Math.floor(Math.random() * 100 + 10)); // Generating random numbers between 0 and 99, adjust as needed
	}
	return randomArray;
}

const fakeTransactionPoints = [
	{
		gather: "Ha Noi",
		transaction: "Cau Giay",
		success: Math.floor(Math.random() * 100 + 10),
		unsucess: Math.floor(Math.random() * 100 + 10),
		returns: Math.floor(Math.random() * 100 + 10),
		total_send: 0,
		total_receive: Math.floor(Math.random() * 3 * (100 + 10)),
	}
]

fakeTransactionPoints.forEach((point) => {
	point.total_send = point.success + point.unsucess + point.returns;
});

const fakeGatheringPoints = [
	{
		name: "Ha Noi",
		toTransaction: [
			{
				transaction: "Cau Giay",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Dong Da",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Ba Dinh",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Hai Ba Trung",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Nam Tu Liem",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Bac Tu Liem",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Hoan Kiem",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
		],
		toGather: [
			{
				gather: "Ho Chi Minh",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				gather: "Thai Binh",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
		]
	},
	{
		name: "Ho Chi Minh",
		toTransaction: [
			{
				transaction: "Quan 1",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 3",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 4",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 5",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 6",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 8",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quan 10",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
		],
		toGather: [
			{
				gather: "Ha Noi",
				send: getRandomArray(7),
				receive: getRandomArray(7),

			},
			{
				gather: "Thai Binh",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
		]
	},
	{
		name: "Thai Binh",
		toTransaction: [
			{
				transaction: "Dong Hung",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Hung Ha",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Quynh Coi",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
			{
				transaction: "Tien Hai",
				send: getRandomArray(7),
				receive: getRandomArray(7),
			},
		],
		toGather: [
			{
				gather: "Ho Chi Minh",
				send: getRandomArray(7),
				receive: getRandomArray(7),

			},
			{
				gather: "Ha Noi",
				send: getRandomArray(7),

				receive: getRandomArray(7),
			},
		]
	},
]

export async function getStatistics(point: Address) {
	return Promise.resolve({
		message: "success",
		statistics: {
			overview: fakeOverview,
			orders: fakeWeeklyOrderStats,
			revenue: fakeRevenue,
			topDeliveries: fakeTopDeliveries,
			properties: fakeProperties,
			transactionPoints: fakeTransactionPoints,
			gatheringPoints: fakeGatheringPoints,
		},
	});
	const rawParams = {};
	if (point.province) rawParams["province"] = point.province;
	if (point.district) rawParams["district"] = point.district;
	if (point.ward) rawParams["ward"] = point.ward;
	const params = new URLSearchParams(rawParams);
	return await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/statistics/overview?${params}`,
		{
			credentials: "include",
		}
	).then(async (response) => {
		if (response.status !== 200) {
			const json = await response.json();
			throw new Error(json.message);
		}
		return response.json();
	});
}
