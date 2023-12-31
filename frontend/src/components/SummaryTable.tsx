import Table from "@/app/staff/components/Table/Table";
import type { Dispatch, SetStateAction } from "react";
import Pagination from "./Pagination/Pagination";
import Summary from "./Summary";

function renderItems<T extends DatabaseTableProps>(
	items: Array<T>,
	filter?: ((items: Array<T>) => Array<T>) | undefined
) {
	if (!filter) {
		return items;
	}
	return filter(items);
}

export default function SummaryTable<T extends DatabaseTableProps>({
	items,
	columnHeadings,
	filter,
	children,
	pageNumber,
	totalPage,
	setPageNumber,
}: {
	items: Array<T>;
	columnHeadings: Array<{ label: string; value: string }>;
	filter?: ((items: Array<T>) => Array<T>) | undefined;
	children?: React.ReactElement;
	pageNumber: number;
	totalPage: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
}) {
	return (
		<div className="flex flex-row-4 gap-4">
			<div className="flex-1/4">
				{children}
			</div>
			<div className="flex-3/4" >
				<div className="flex flex-col ">
					<Table columnHeadings={columnHeadings}>
						{renderItems(items, filter).map((item) => (
							<Summary key={item.id} item={item} headers={columnHeadings} />
						))}
					</Table>

					

				</div>



			</div>

			<div className="absolute bottom-0 right-0">
						{/* Positioning the Pagination to the right bottom */}
						<Pagination
							pageNumber={pageNumber}
							numberOfPages={totalPage}
							setPageNumber={setPageNumber}
						/>
					</div>

		</div>
	);
}
