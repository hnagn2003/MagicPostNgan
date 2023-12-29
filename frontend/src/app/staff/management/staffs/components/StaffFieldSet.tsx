import Fieldset from "@/components/Form/Fieldset";
import Select from "@/components/Form/Select";
import TextInput from "@/components/Form/TextInput";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { StaffStateProps } from "../../../utils/staffs";
import { UserOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { PhoneOutlined } from '@ant-design/icons';

const roles = [
	{
		label: "Company Administrator",
		value: "COMPANY_ADMINISTRATOR",
	},
	{
		label: "Gathering Point Manager",
		value: "GATHERING_POINT_MANAGER",
	},
	{
		label: "Transaction Point Manager",
		value: "TRANSACTION_POINT_MANAGER",
	},
	{
		label: "Transaction Staff",
		value: "TRANSACTION_STAFF",
	},
	{
		label: "Gathering Staff",
		value: "GATHERING_STAFF",
	},
];

export default function StaffFieldSet({
	state,
	disabled = false,
	editView = false,
}: {
	state: StaffStateProps;
	disabled?: boolean;
	editView?: boolean;
}) {
	return (
		<Fieldset
			legend="Staff's Information"
			icon={faLocationDot}
			className="sm:flex-col"
			disabled={disabled}
		>
			<Select
				label="Role"
				name="role"
				options={roles}
				handleChange={(value) => {
					state.role.handleChange(value);
				}}
				className="text-sm"
				value={state.role.value}
				required={true}
				disabled={editView}
			/>
			<TextInput
				label="Name"
				placeholder="Name"
				required={true}
				name="name"
				value={state.name.value}
				handleChange={(name: string) => state.name.handleChange(name)}
				prefix={<UserOutlined />}
			/>
			<TextInput
				label="Username"
				placeholder="Username"
				required={true}
				name="username"
				value={state.username.value}
				handleChange={(username: string) =>
					state.username.handleChange(username)
				}
				prefix={<UserOutlined />}
			/>
			<TextInput
				label="Email"
				placeholder="Email"
				required={true}
				name="email"
				value={state.email.value}
				handleChange={(email: string) => state.email.handleChange(email)}
				prefix={<MailOutlined />}
			/>
			<TextInput
				label="Phone number"
				placeholder="Phone number"
				required={true}
				name="phoneNumber"
				value={state.phoneNumber.value}
				handleChange={(phoneNumber: string) =>
					state.phoneNumber.handleChange(phoneNumber)
				}
				prefix={<PhoneOutlined />}
			/>
		</Fieldset>
	);
}
