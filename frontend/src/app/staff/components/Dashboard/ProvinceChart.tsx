import { useState } from 'react';
import CustomBarChart from '@/app/staff/components/Charts/CustomBarChart';

export default function TopDeliveriesChart({
  data,
}: {
  data: Array<{
    point: string;
    incoming: number;
    outgoing: number;
  }>;
}) {
  const [selectedpoint, setSelectedpoint] = useState<string | null>(null);

  const chartData = data.map(({ incoming, outgoing, point }) => ({
    incoming,
    outgoing,
    name: point,
  }));

  const filteredData = selectedpoint
    ? data.filter((item) => item.point === selectedpoint)
    : data;
	console.log('chartData Data:', chartData); 
	console.log('Filtered Data:', filteredData); 
  const shownData = filteredData.map(({point, incoming, outgoing}) => ({
	incoming,
    outgoing,
    name: point,
  }));
  return (
    <div className="bg-custom-white px-6 p-4 col-span-2 shadow-md rounded-md">
      <div className="mb-2">Top Deliveries</div>
      <div>
        <select className="bg-custom-white shadow-md rounded-md"
          value={selectedpoint || ''}
          onChange={(e) => setSelectedpoint(e.target.value || null)}
        >
          <option value="">All points</option>
          {data.map((item) => (
            <option key={item.point} value={item.point}>
              {item.point}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-[-2rem] md:ml-[-1.5rem]">
        <CustomBarChart data={shownData} />
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import CustomBarChart from '@/app/staff/components/Charts/CustomBarChart';

// export default function TopDeliveriesChart({
//   data,
// }: {
//   data: Array<{
//     province: string;
//     incoming: number;
//     outgoing: number;
//   }>;
// }) {
//   const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
//   const [selectedIncoming, setSelectedIncoming] = useState<number | null>(null);
//   const [selectedOutgoing, setSelectedOutgoing] = useState<number | null>(null);

//   const chartData = data.map(({ incoming, outgoing, province }) => ({
//     incoming,
//     outgoing,
//     name: province,
//   }));

//   const filteredData = data.filter((item) => {
//     const matchesProvince = !selectedProvince || item.province === selectedProvince;
//     const matchesIncoming = selectedIncoming === null || item.incoming === selectedIncoming;
//     const matchesOutgoing = selectedOutgoing === null || item.outgoing === selectedOutgoing;
//     return matchesProvince && matchesIncoming && matchesOutgoing;
//   });

//   console.log('Filtered Data:', filteredData); // Debugging: Print filtered data to console

//   return (
//     <div className="bg-custom-white px-6 p-4 col-span-2 shadow-md rounded-md">
//       <div className="mb-2">Top Deliveries</div>
//       <div>
//         <select
//           value={selectedProvince || ''}
//           onChange={(e) => setSelectedProvince(e.target.value || null)}
//         >
//           <option value="">All Provinces</option>
//           {data.map((item) => (
//             <option key={item.province} value={item.province}>
//               {item.province}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           placeholder="Incoming"
//           value={selectedIncoming || ''}
//           onChange={(e) => setSelectedIncoming(e.target.value === '' ? null : +e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Outgoing"
//           value={selectedOutgoing || ''}
//           onChange={(e) => setSelectedOutgoing(e.target.value === '' ? null : +e.target.value)}
//         />
//       </div>
//       <div className="ml-[-2rem] md:ml-[-1.5rem]">
//         <CustomBarChart data={chartData} />
//       </div>
//     </div>
//   );
// }
