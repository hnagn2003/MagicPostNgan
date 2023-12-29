"use client";

import {
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LookupResult from "./LookUpResult";
import QrContainer from "./QrContainer";

export default function LookUp() {
	const [orderIdInput, setOrderIdInput] = useState("");
	const [orderId, setOrderId] = useState<null | string>(null);
	return (
		<div className="h-full flex flex-col flex-1">
			<div className="bg-custom-white p-4 md:px-32 flex flex-col items-center gap-6 flex-1">
				<h3 className="text-custom-text-color font-medium text-lg self-start">
					TRA CỨU ĐƠN HÀNG QUA ID
				</h3>
				<div className="w-full">
					<div className="">
						<div className="flex flex-row justify-center">
							<input
								type="text"
								value={orderIdInput}
								onChange={(e) => setOrderIdInput(e.currentTarget.value)}
								className="input input-sm bg-white text-custom-white mr-2 border-primary w-3/4"
								placeholder="Search"
							/>
							<button
								type="button"
								className="btn btn-primary btn-sm"
								onClick={() => setOrderId(orderIdInput)}
							>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
					</div>
				</div>
				{orderId ? <LookupResult orderId={orderId} /> : null}
			</div>
		</div>
	);
}
