import { FieldValues, Path } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../ui/form";
import { useGenericFormContext } from "../CustomContext";
import { Input } from "../../ui/input";

type TTextFieldsProps<TFieldValue extends FieldValues> = {
	name: Path<TFieldValue>;
	label: string;
	placeholder?: string;
	type?: "text" | "email" | "number" | "password";
};
export const TextFields = <TFieldValue extends FieldValues>(
	props: TTextFieldsProps<TFieldValue>
) => {
	const { name, label, placeholder, type = "text" } = props;

	const control = useGenericFormContext<TFieldValue>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className=" w-full">
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							className="my-2"
							type={type}
							placeholder={placeholder}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
