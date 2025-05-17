import { FieldValues, Path } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useGenericFormContext } from "../CustomContext";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

type TSelectFieldsProps<TFieldValue extends FieldValues> = {
	name: Path<TFieldValue>;
	label: string;
	placeholder?: string;
	options?: Array<{ value: string; label: string }>;
};
export const SelectFields = <TFieldValue extends FieldValues>(
	props: TSelectFieldsProps<TFieldValue>
) => {
	const { name, label, placeholder, options } = props;

	const control = useGenericFormContext<TFieldValue>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full" >
					{label && <FormLabel>{label}</FormLabel>}
					<Select onValueChange={field.onChange} value={field.value}>
						<FormControl>
							<SelectTrigger className="w-full">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{options?.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							)) || []}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
