import CardFour from '../Charts/CardFour';
import CardOne from '../Charts/CardOne';
import CardThree from '../Charts/CardThree';
import CardTwo from '../Charts/CardTwo';
import ChartOne from '../Charts/ChartOne';
import ChartThree from '../Charts/ChartThree';
import ChartTwo from '../Charts/ChartTwo';
import TableOne from '../Charts/TableOne';
export default function Overview({
	incoming,
	outgoing,
	pending,
	revenue,
	profit,
}: {
	incoming: number;
	outgoing: number;
	pending: number;
	revenue: number;
	profit: number;
}) {
	const labels = ["Incoming", "Outgoing", "Pending", "Revenue", "Profit"];
	const zip = [incoming, outgoing, pending, revenue, profit].map(
		(attr, index) => {
			return {
				label: labels[index],
				value: attr,
			};
		}
	);
	return (
		// <div className=" bg-custom-white px-6 p-4 rounded-md col-span-2 lg:col-span-3 shadow-md">
		// 	<div className="font-md mb-2">Today</div>
		// 	<div className="grid grid-cols-5">
		// 		{zip.map(({ label, value }) => (
		// 			<div key={label}>
		// 				<div className="text-slate-500 text-sm">{label}</div>
		// 				<div className="font-bold text-lg">{value}</div>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
		<>
      <div className="grid grid-cols-10 gap-16 md:grid-cols-20 md:gap-8 xl:grid-cols-5 10xl:gap-30">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div>
    </>
	);
}
