export default function SubMenu({
	label,
	children,
}: {
	label: string;
	children: Array<React.ReactNode>;
}) {
	return (
		/*<li>
			<details open>
				<summary>{label}</summary>
				<ul>{children}</ul>
			</details>
		</li>*/
		<div className="dropdown dropdown-hover">
			<div tabIndex={0} role="button" className="btn m-1">{label}</div>
			<ul tabIndex={0} className="dropdown-content shadow bg-base-100">
				<li><a>{children}</a></li>
			</ul>
		</div>
	);
}
