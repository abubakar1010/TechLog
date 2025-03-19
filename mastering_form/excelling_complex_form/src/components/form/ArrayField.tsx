import { ReactNode } from "react";
import {
	ArrayPath,
	FieldValues,
	useFieldArray,
	UseFieldArrayReturn,
} from "react-hook-form";
import { useGenericFormContext } from "./CustomContext";

type ArrayFieldProps<TFormFieldsValue extends FieldValues> = {
	children: (
		field: UseFieldArrayReturn<TFormFieldsValue, ArrayPath<TFormFieldsValue>>
	) => ReactNode;
	name: ArrayPath<TFormFieldsValue>;
};

export const ArrayFiled = <TFormFieldsValue extends FieldValues>(
	props: ArrayFieldProps<TFormFieldsValue>
) => {
	const { children, name } = props;

	const control = useGenericFormContext<TFormFieldsValue>();

	const arrayField = useFieldArray({
		control,
		name,
	});

	return children(arrayField);
};
