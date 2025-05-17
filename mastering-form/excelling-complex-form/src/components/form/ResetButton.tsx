import { Button } from "@/components/ui/button";
import { FieldValues, useFormContext } from "react-hook-form";

type TResetProps<TFormFieldValues extends FieldValues> = {
	label: string;
	resetValues?: Partial<TFormFieldValues>;
};
export const ResetButton = <TFormFieldValues extends FieldValues>(
	props: TResetProps<TFormFieldValues>
) => {
	const { label, resetValues } = props;
	const form = useFormContext<TFormFieldValues>();
	const handleReset = () => {
		console.log("reset values");
		form.reset(
			(resetValues as TFormFieldValues) || form.formState.defaultValues
		);
	};
	return (
		<div>
			<Button
				className="cursor-pointer"
				onClick={handleReset}
				type="reset"
				variant="outline"
			>
				{label}
			</Button>
		</div>
	);
};
