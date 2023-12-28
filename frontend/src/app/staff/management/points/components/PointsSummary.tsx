import TableRow from "@/app/staff/components/Table/TableRow";
import { PointProps } from "@/app/staff/utils/points";
import { formatDate } from "@/utils/helper";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PointsSummary({ point }: { point: PointProps }) {
	return (
		<TableRow>
			<td>
				<button type="button" className="mx-auto block">
					<FontAwesomeIcon icon={faBars} />
				</button>
			</td>
			<td>
				<Link
					className="mx-auto block w-fit link text-[#007FFF]"
					href={`/staff/orders/status/${point.id}`}
				>
					{point.id}
				</Link>
			</td>
			{[formatDate(point.createdAt!)].map((cell, index) => (
				<td className="text-center text-xs" key={index}>
					{cell}
				</td>
			))}
		</TableRow>
	);
}
