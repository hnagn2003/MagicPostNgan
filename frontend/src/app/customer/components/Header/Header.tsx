import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="p-4 h-16 pr-6 md:gap-6 md:px-32 gap-4 flex flex-row items-center z-[30] fixed w-full top-0 bg-[#00204B]">
			<Image
				src="/logo_sqrt_notext_crop.png"
				alt=""
				width="0"
				height="0"
				className="w-16 h-auto"
			/>
			<div className="ml-auto text-xs hidden md:block">
			</div>
			<Link href="/login" className=" ml-auto md:ml-0">
				<button type="button" className="btn btn-primary text-sm btn-sm">
					Đăng nhập
				</button>
			</Link>
		</header>
	);
}
 