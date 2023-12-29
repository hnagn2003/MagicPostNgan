import Image from "next/image";
import LookUp from "./components/LookUp/LookUp";

export default function Page() {
	return (
		<div className="flex flex-col h-full flex-1">
			<LookUp />
		</div>
	);
}
